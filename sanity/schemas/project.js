// schemas/project.js
export default {
  name: 'project',
  title: 'Portfolio Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Web Development', value: 'web' },
          { title: 'Mobile Design', value: 'mobile' },
          { title: 'Branding', value: 'branding' },
          { title: 'Digital Marketing', value: 'marketing' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', type: 'string', title: 'Alt Text' }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of tech stack items',
      validation: Rule => Rule.required()
    },
    {
      name: 'client',
      title: 'Client / Company',
      type: 'string'
    },
    {
      name: 'year',
      title: 'Year Completed',
      type: 'string'
    },
    {
      name: 'metrics',
      title: 'Metrics / Achievements',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' }
          ]
        }
      ]
    },
    {
      name: 'url',
      title: 'Project Link',
      type: 'url'
    },
    {
      name: 'silhouette',
      title: 'People Silhouette',
      type: 'boolean',
      description: 'Render images as silhouettes if there are people'
    },
    {
      name: 'featured',
      title: 'Featured on Home',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'body',
      title: 'Project Case Study / Detailed Content',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }]
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'category'
    }
  }
}