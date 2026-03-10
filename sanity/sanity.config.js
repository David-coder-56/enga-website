import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  projectId: 'cbq77g30', 
  dataset: 'production',
  title: 'ENGA Admin Terminal', // Custom Title for the dashboard

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('ENGA Control Center')
          .items([
            // 🎨 PORTFOLIO MANAGEMENT
            S.listItem()
              .title('Portfolio Archives')
              .icon(() => '🎨')
              .child(
                S.list()
                  .title('Filter Projects')
                  .items([
                    S.listItem()
                      .title('All Projects')
                      .child(S.documentTypeList('project').title('All Projects')),
                    S.divider(),
                    S.listItem()
                      .title('Featured on Home')
                      .child(
                        S.documentTypeList('project')
                          .title('Featured Projects')
                          .filter('_type == "project" && featured == true')
                      ),
                  ])
              ),

            S.divider(),

            // ⚙️ SITE INFRASTRUCTURE (Singletons)
            S.listItem()
              .title('Core Settings')
              .icon(() => '⚙️')
              .child(
                S.editor()
                  .id('general-settings')
                  .schemaType('settings')
                  .title('Global Site Config')
              ),
            
            // This filters out the 'settings' document from the 'All' list so it only lives in 'Core Settings'
            ...S.documentTypeListItems().filter(
              (listItem) => !['project', 'settings'].includes(listItem.getId())
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})