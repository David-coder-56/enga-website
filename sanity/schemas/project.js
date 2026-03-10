export default {
  name: 'project',
  title: 'Portfolio Projects',
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
        source: 'title', // Automatically generates from Title
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
          { title: 'Mobile App', value: 'mobile' },
          { title: 'Branding', value: 'branding' },
          { title: 'Digital Marketing', value: 'marketing' },
        ],
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'object',
      fields: [
        {
          name: 'imageType',
          title: 'Image Source',
          type: 'string',
          options: {
            list: [
              { title: 'Upload Image', value: 'upload' },
              { title: 'External URL', value: 'url' }
            ]
          },
          initialValue: 'upload',
          validation: Rule => Rule.required()
        },
        {
          name: 'upload',
          title: 'Upload Image',
          type: 'image',
          options: { hotspot: true },
          hidden: ({ document }) => document?.mainImage?.imageType !== 'upload',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
            }
          ]
        },
        {
          name: 'url',
          title: 'Image URL',
          type: 'url',
          hidden: ({ document }) => document?.mainImage?.imageType !== 'url',
          description: 'Direct link to image (must end with .jpg, .png, .gif, .webp, etc.)',
          validation: Rule => Rule.custom((value, context) => {
            if (context.parent?.imageType === 'url' && !value) {
              return 'Image URL is required when using external URL option'
            }
            if (context.parent?.imageType === 'url' && value) {
              // Basic URL validation for image files
              const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.avif'];
              const hasImageExtension = imageExtensions.some(ext => 
                value.toLowerCase().includes(ext)
              );
              if (!hasImageExtension) {
                return 'URL must point to an image file (.jpg, .png, .gif, .webp, etc.)'
              }
            }
            return true
          })
        },
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          hidden: ({ document }) => document?.mainImage?.imageType !== 'url',
          description: 'Description for accessibility and SEO'
        },
        {
          name: 'cdnUrl',
          title: 'CDN URL (Optional)',
          type: 'url', 
          hidden: ({ document }) => document?.mainImage?.imageType !== 'url',
          description: 'If you have a CDN version of this image, paste it here for better performance'
        }
      ],
      validation: Rule => Rule.required()
    },
    // ADDED: Body field for the "Project Detail" page content
    {
      name: 'body',
      title: 'Project Case Study',
      type: 'array', 
      of: [{ type: 'block' }, { type: 'image' }]
    },
    {
      name: 'description',
      title: 'Short Excerpt',
      type: 'text',
      rows: 3,
      description: 'Brief summary for the project cards'
    },
    {
      name: 'silhouette',
      title: 'People Silhouette',
      type: 'boolean',
      description: 'If checked, project images will be rendered as black silhouettes (useful when there are people in the photo).'
    },
    {
      name: 'featured',
      title: 'Featured on Home',
      type: 'boolean',
      initialValue: false
    }
  ],
  preview: {
    select: { 
      title: 'title', 
      media: ({ mainImage }) => {
        if (!mainImage) return null;
        if (mainImage.imageType === 'upload') {
          return mainImage.upload;
        }
        return null; // External URLs don't work in preview
      }, 
      subtitle: 'category' 
    }
  }
}