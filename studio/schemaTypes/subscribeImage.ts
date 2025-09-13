// schemas/subscribeImageLoop.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'subscribeImageLoop',
  title: 'Subscribe Image Loop',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (rule) => rule.required(),
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'Alternative text for accessibility'
    }),
    defineField({
      name: 'text',
      title: 'Display Text',
      type: 'string',
      description: 'Text to display with the image (optional)'
    }),
    defineField({
      name: 'showText',
      title: 'Show Text',
      type: 'boolean',
      initialValue: false,
      description: 'Whether to show the text with this image'
    }),
    defineField({
      name: 'isInitial',
      title: 'Is Initial Image',
      type: 'boolean',
      initialValue: false,
      description: 'Mark as the initial/first image in the loop'
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (rule) => rule.required().min(0),
      description: 'Order in which images appear (0 = first)'
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      initialValue: true,
      description: 'Whether this image is currently active in the loop'
    })
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}]
    }
  ],
  preview: {
    select: {
      title: 'alt',
      order: 'order',
      isActive: 'isActive',
      media: 'image'
    },
    prepare(selection) {
      const {title, order, isActive} = selection
      return {
        title: `${order}. ${title}`,
        subtitle: isActive ? '✓ Active' : '✗ Inactive',
        media: selection.media
      }
    }
  }
})