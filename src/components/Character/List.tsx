import Grid from '@mui/material/Grid';
import CharacterCard from './Card';
import { ICharacterListProps, ICharacterProps} from './types';

const CharacterList = ({ characterData }: ICharacterListProps) => {
    return (
        <Grid container rowSpacing={1} spacing={1}>
          {characterData.map((char: ICharacterProps) => (
            <Grid item xs={4} key={char.id} data-testid="character">
              <CharacterCard
                name={char.name}
                image={char.image}
                species={char.species}
                status={char.status}
                type={char.type}
                gender={char.gender}
              />
            </Grid>
          ))}
        </Grid>
    )
}


export default CharacterList;