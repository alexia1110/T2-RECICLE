import { CATEGORIES_RECYCLE } from "../../constant/categories.constant";

export function iconByCategorie(material: string) {

   return CATEGORIES_RECYCLE.categorie.find(element => element.name === material[0]);
  }
  