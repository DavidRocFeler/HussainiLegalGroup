// blog.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog (Articles & Publications)',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Content Type',
      type: 'string',
      options: {
        list: [
          {title: 'Articles', value: 'articles'},
          {title: 'Publications', value: 'publications'}
        ],
        layout: 'dropdown'
      },
      validation: (rule) => rule.required(),
      description: '⚡ Select whether this is an Article or Publication for proper categorization'
    }),
    defineField({
      name: 'picture',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: '📷 Main image that will appear with your article/publication'
    }),
    defineField({
      name: 'label',
      title: 'Category Label',
      type: 'string',
      description: '🏷️ Small category text that appears above the title (e.g., "LEGAL INSIGHTS", "CASE STUDY")'
    }),
    defineField({
      name: 'title',
      title: 'Main Title',
      type: 'string',
      validation: (rule) => rule.required(),
      description: '📌 The main headline of your article or publication'
    }),
    defineField({
      name: 'secondTitle',
      title: 'Secondary Title',
      type: 'string',
      description: '📝 Optional subtitle or secondary headline'
    }),
    defineField({
      name: 'note',
      title: 'Brief Summary',
      type: 'text',
      description: '📄 Short description or excerpt that summarizes the content (appears in card previews)'
    }),
    
    // FIRST COLUMN CONTENT
    defineField({
      name: 'subtitleFirst',
      title: 'Left Column - Section Title',
      type: 'string',
      description: '⬅️ COLUMN 1: Main heading for the LEFT side content section'
    }),
    defineField({
      name: 'descripFirstFirst',
      title: 'Left Column - First Paragraph',
      type: 'text',
      description: '📖 COLUMN 1 - PARAGRAPH 1: First paragraph of text that appears under the left column title'
    }),
    defineField({
      name: 'descripSecondFirst',
      title: 'Left Column - Second Paragraph',
      type: 'text',
      description: '📖 COLUMN 1 - PARAGRAPH 2: Second paragraph of text for the left column (optional)'
    }),
    defineField({
      name: 'descripThirdFirst',
      title: 'Left Column - Third Paragraph',
      type: 'text',
      description: '📖 COLUMN 1 - PARAGRAPH 3: Third paragraph of text for the left column (optional)'
    }),
    
    // SECOND COLUMN CONTENT
    defineField({
      name: 'subtitleSecond',
      title: 'Right Column - Section Title',
      type: 'string',
      description: '➡️ COLUMN 2: Main heading for the RIGHT side content section'
    }),
    defineField({
      name: 'descripFirstSecond',
      title: 'Right Column - First Paragraph',
      type: 'text',
      description: '📖 COLUMN 2 - PARAGRAPH 1: First paragraph of text that appears under the right column title'
    }),
    defineField({
      name: 'descripSecondSecond',
      title: 'Right Column - Second Paragraph',
      type: 'text',
      description: '📖 COLUMN 2 - PARAGRAPH 2: Second paragraph of text for the right column (optional)'
    }),
    defineField({
      name: 'descripThirdSecond',
      title: 'Right Column - Third Paragraph',
      type: 'text',
      description: '📖 COLUMN 2 - PARAGRAPH 3: Third paragraph of text for the right column (optional)'
    }),
    
    // METADATA
    defineField({
      name: 'date',
      title: 'Publication Date',
      type: 'date',
      options: {
        dateFormat: 'MMMM D, YYYY'
      },
      description: '📅 When was this article/publication written or published'
    }),
    defineField({
      name: 'readtime',
      title: 'Estimated Read Time',
      type: 'string',
      description: '⏱️ How long it takes to read (e.g., "5min read", "10min read")'
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
      description: '🔗 The URL path for this content (auto-generated from title, but can be customized)'
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: '🔢 Number to control the order in which items appear (lower numbers appear first)'
    }),
    defineField({
      name: 'isActive',
      title: 'Published',
      type: 'boolean',
      initialValue: true,
      description: '✅ Toggle ON to publish, OFF to save as draft'
    })
  ],
  orderings: [
    {
      title: 'Content Type',
      name: 'categoryAsc',
      by: [{field: 'category', direction: 'asc'}]
    },
    {
      title: 'Date (Newest First)',
      name: 'dateDesc',
      by: [{field: 'date', direction: 'desc'}]
    },
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}]
    }
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      date: 'date',
      media: 'picture',
      isActive: 'isActive'
    },
    prepare(selection) {
      const {title, category, date, isActive} = selection
      const formattedDate = date ? new Date(date).toLocaleDateString() : 'No date'
      return {
        title: `${title}`,
        subtitle: `${category.toUpperCase()} - ${formattedDate} ${isActive ? '✅ Published' : '📝 Draft'}`,
        media: selection.media
      }
    }
  }
})