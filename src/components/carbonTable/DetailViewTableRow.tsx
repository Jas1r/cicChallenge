interface IDetailViewTableRow {
    rowDetail: any;
}

export default function DetailViewTableRow(
  {rowDetail}: IDetailViewTableRow) {
  if (rowDetail) {
    return (
      <>
        <h5>Detail informations about: {rowDetail.title}</h5>
        <div className={'spacer10px'}></div>
        <p className={'bx--data-table-header__description'}><span className={'bold'}>Release year:</span> {rowDetail.year}</p>
        <p className={'bx--data-table-header__description'}><span className={'bold'}>Locations:</span> {rowDetail.locations}</p>
        <p className={'bx--data-table-header__description'}><span className={'bold'}>Production company:</span> {rowDetail.productionCompany}</p>
        <p className={'bx--data-table-header__description'}><span className={'bold'}>Director:</span> {rowDetail.director}</p>
        <p className={'bx--data-table-header__description'}><span className={'bold'}>Writer:</span> {rowDetail.writer}</p>
        <p className={'bx--data-table-header__description'}><span className={'bold'}>Actor 1:</span> {rowDetail.actor1}</p>
        <p className={'bx--data-table-header__description'}><span className={'bold'}>Actor 2:</span> {rowDetail.actor2}</p>
        <p className={'bx--data-table-header__description'}><span className={'bold'}>Actor 3:</span> {rowDetail.actor3}</p>
        <div className={'spacer10px'}></div>
      </>
    );
  } return (<></>);
}
