export interface ICharacterProps {
    id?: number,
    name: string,
    image: string,
    species: string,
    status: string,
    type: string,
    gender: string,
}

export interface ICharacterListProps{
    characterData: ICharacterProps[],
}