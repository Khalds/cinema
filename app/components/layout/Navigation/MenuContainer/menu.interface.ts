import { TypeMaterialIconName } from '@/shared/types/icons.types'

export interface IMenuItem {
	icon: TypeMaterialIconName
	link: string
	title: string
}

export interface IMenu {
	title: string
	items: IMenuItem[]
}
