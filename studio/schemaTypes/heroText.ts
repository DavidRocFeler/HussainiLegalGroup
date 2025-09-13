// heroText.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heroText',
  title: 'Hero Text Content',
  type: 'document',
  fields: [
    defineField({
      name: 'page',
      title: 'Page',
      type: 'string',
      options: {
        list: [
          {title: 'Home', value: 'home'},
          {title: 'About', value: 'about'},
          {title: 'Expertise', value: 'expertise'},
          {title: 'Careers', value: 'careers'},
          {title: 'Strategy', value: 'strategy'}
        ],
        layout: 'dropdown'
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'descriptionFirst',
      title: 'Description First',
      type: 'text'
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
      description: 'Used to control the display order'
    })
  ],
  orderings: [
    {
      title: 'Page',
      name: 'pageAsc',
      by: [{field: 'page', direction: 'asc'}]
    },
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}]
    }
  ]
})