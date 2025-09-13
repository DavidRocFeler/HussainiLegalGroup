import { sanityWriteClient } from '@/lib/sanity';
import { CardProfessionalProfileProps } from '@/types/about';

// Función única para obtener todos los perfiles profesionales activos
export const getProfessionalProfiles = async (): Promise<CardProfessionalProfileProps[]> => {
  const query = `*[_type == "cardProfessionalProfile" && isActive == true] | order(order asc){
    _id,
    name,
    role,
    "image": image.asset->url,
    page,
    order,
    isActive
  }`;
  
  const result = await sanityWriteClient.fetch(query);
  return result as CardProfessionalProfileProps[];
}

// // 1. CardAbout
// export const getCardAbouts = async () => {
//   const query = `*[_type == "cardAbout"] | order(order asc){
//     _id,
//     title,
//     description,
//     order
//   }`
//   return await sanityWriteClient.fetch(query)
// }

// export const createCardAbout = async (data: {title: string, description: string, order?: number}) => {
//   return await sanityWriteClient.create({
//     _type: 'cardAbout',
//     title: data.title,
//     description: data.description,
//     order: data.order || Date.now()
//   })
// }

// export const updateCardAbout = async (id: string, data: {title?: string, description?: string, order?: number}) => {
//   return await sanityWriteClient.patch(id).set(data).commit()
// }

// export const deleteCardAbout = async (id: string) => {
//   return await sanityWriteClient.delete(id)
// }

// // 2. OurEthos
// export const getOurEthos = async () => {
//   const query = `*[_type == "ourEthos"][0]{
//     _id,
//     title,
//     subtitle
//   }`
//   return await sanityWriteClient.fetch(query)
// }

// export const updateOurEthos = async (id: string, data: {title: string, subtitle: string}) => {
//   return await sanityWriteClient.patch(id).set(data).commit()
// }

// // 3. LabelAboutInfo
// export const getLabelAboutInfos = async () => {
//   const query = `*[_type == "labelAboutInfo"] | order(order asc){
//     _id,
//     score,
//     description,
//     hasBorderBottom,
//     order
//   }`
//   return await sanityWriteClient.fetch(query)
// }

// export const createLabelAboutInfo = async (data: {score: string, description: string, hasBorderBottom?: boolean, order?: number}) => {
//   return await sanityWriteClient.create({
//     _type: 'labelAboutInfo',
//     score: data.score,
//     description: data.description,
//     hasBorderBottom: data.hasBorderBottom || false,
//     order: data.order || Date.now()
//   })
// }

// export const updateLabelAboutInfo = async (id: string, data: {score?: string, description?: string, hasBorderBottom?: boolean, order?: number}) => {
//   return await sanityWriteClient.patch(id).set(data).commit()
// }

// export const deleteLabelAboutInfo = async (id: string) => {
//   return await sanityWriteClient.delete(id)
// }

// // 4. AboutCover
// export const getAboutCover = async () => {
//   const query = `*[_type == "aboutCover"][0]{
//     _id,
//     backgroundImage {
//       asset -> {
//         url,
//         metadata {
//           dimensions
//         }
//       }
//     },
//     labels[] -> {
//       _id,
//       score,
//       description,
//       hasBorderBottom
//     }
//   }`
//   return await sanityWriteClient.fetch(query)
// }

// export const updateAboutCover = async (id: string, data: {backgroundImage?: any, labels?: string[]}) => {
//   return await sanityWriteClient.patch(id).set(data).commit()
// }

// // 5. ProfessionalProfile
// export const getProfessionalProfiles = async () => {
//   const query = `*[_type == "professionalProfile"] | order(order asc){
//     _id,
//     image {
//       asset -> {
//         url,
//         metadata {
//           dimensions
//         }
//       }
//     },
//     name,
//     role,
//     order
//   }`
//   return await sanityWriteClient.fetch(query)
// }

// export const createProfessionalProfile = async (data: {image: any, name: string, role: string, order?: number}) => {
//   return await sanityWriteClient.create({
//     _type: 'professionalProfile',
//     image: data.image,
//     name: data.name,
//     role: data.role,
//     order: data.order || Date.now()
//   })
// }

// export const updateProfessionalProfile = async (id: string, data: {image?: any, name?: string, role?: string, order?: number}) => {
//   return await sanityWriteClient.patch(id).set(data).commit()
// }

// export const deleteProfessionalProfile = async (id: string) => {
//   return await sanityWriteClient.delete(id)
// }

// // 6. TimelineItem
// export const getTimelineItems = async () => {
//   const query = `*[_type == "timelineItem"] | order(order asc){
//     _id,
//     year,
//     description,
//     order
//   }`
//   return await sanityWriteClient.fetch(query)
// }

// export const createTimelineItem = async (data: {year: string, description: string, order?: number}) => {
//   return await sanityWriteClient.create({
//     _type: 'timelineItem',
//     year: data.year,
//     description: data.description,
//     order: data.order || Date.now()
//   })
// }

// export const updateTimelineItem = async (id: string, data: {year?: string, description?: string, order?: number}) => {
//   return await sanityWriteClient.patch(id).set(data).commit()
// }

// export const deleteTimelineItem = async (id: string) => {
//   return await sanityWriteClient.delete(id)
// }