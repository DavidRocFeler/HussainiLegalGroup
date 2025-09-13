// homeSectionSticky.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homeSectionSticky',
  title: 'Home Section Sticky',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'descriptionFirst',
      title: 'Description First',
      type: 'text',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'descriptionSecond',
      title: 'Description Second',
      type: 'text'
    }),
    defineField({
      name: 'descriptionThird',
      title: 'Description Third',
      type: 'text'
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Used to control the display order (1, 2, 3)',
      validation: (rule) => rule.required().min(1).max(3)
    })
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}]
    }
  ]
})