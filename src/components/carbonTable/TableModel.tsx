import {GridColDef} from '@mui/x-data-grid';

const DataModelAPI: {[key: string]: string;} = {
  title: 'title',
  year: 'release_year',
  locations: 'locations',
  productionCompany: 'production_company',
  director: 'director',
  writer: 'writer',
  actor1: 'actor_1',
  actor2: 'actor_2',
  actor3: 'actor_3',
};

export const DATASETAPISOURCE = 'https://data.sfgov.org/resource/yitu-d5am.json';

export interface RowElement {
  idx: number;
  title: string;
  year: number;
  director: string;
}

export interface RowElementIBM {
  id: string;
  title: string;
  year: number;
  director: string;
  locations: string;
  productionCompany: string;
  writer: string;
  actor1: string;
  actor2: string;
  actor3: string;
}

export const Columns: GridColDef[] = [
  {field: 'title', headerName: 'Titel', flex: 0.4, headerClassName: 'tableHeader'},
  {field: 'year', headerName: 'Jahr', flex: 0.2, minWidth: 50, headerClassName: 'tableHeader'},
  {field: 'director', headerName: 'Regie', flex: 0.2, headerClassName: 'tableHeader'},
];

export const ColumnsIBM = [
  {key: 'title', header: 'Titel'},
  {key: 'year', header: 'Jahr'},
  {key: 'director', header: 'Regie'},
];

export function mapResultsToRowElement(data: any) {
  return data.map((item: any, index: any) => ({
    idx: index,
    title: item[DataModelAPI.title],
    year: item[DataModelAPI.year],
  } as RowElement));
}

export function mapResultsToRowElementIBM(data: any) {
  return data.map((item: any, index: any) => ({
    id: index.toString(),
    title: item[DataModelAPI.title],
    year: item[DataModelAPI.year],
    director: item[DataModelAPI.director],
    locations: item[DataModelAPI.locations],
    productionCompany: item[DataModelAPI.productionCompany],
    writer: item[DataModelAPI.writer],
    actor1: item[DataModelAPI.actor1],
    actor2: item[DataModelAPI.actor2],
    actor3: item[DataModelAPI.actor3],
  } as RowElementIBM));
}

export const tableTitle: string = 'Film Locations in San Francisco';

export const tableDescirption: string = 'If you love movies, and you love San Francisco, you\'re bound to love this -- a listing of filming locations of movies shot in San Francisco starting from 1924. You\'ll find the titles, locations, fun facts, names of the director, writer, actors, and studio for most of these films.';

export const titleFilterRows =
({rowIds,
  headers,
  cellsById,
  inputValue,
  getCellId}: any,
) =>
  rowIds.filter((rowId: any) =>
    headers.filter((headerElem: { key: string; }) => headerElem.key === 'title')
      .some(({key}: any) => {
        const id = getCellId(rowId, key);
        if (typeof cellsById[id].value === 'boolean') {
          return false;
        }
        return ('' + cellsById[id].value)
          .toLowerCase()
          .includes(inputValue.toLowerCase());
      }),
  );
