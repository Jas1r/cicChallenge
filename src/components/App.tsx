import {useEffect, useState} from 'react';
import CarbonHeader from './carbonHeader/CarbonHeader';
import CarbonTable from './carbonTable/CarbonTable';
import {ColumnsIBM, DATASETAPISOURCE, mapResultsToRowElementIBM, RowElement} from './carbonTable/TableModel';
import {Content, Pagination} from 'carbon-components-react';
import './App.scss';

export default function App2() {
  const [fetchedDataArray, setFetchedDataArray] = useState<RowElement[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(10);


  const getDataFromAPI = function() {
    fetch(DATASETAPISOURCE)
      .then((response) => response.json())
      .then((data) => {
        setTotalItems(data.length);
        setFetchedDataArray(mapResultsToRowElementIBM(data));
      });
  };

  useEffect(() => {
    getDataFromAPI();
  }, []);

  useEffect(() => {
    setTotalItems(fetchedDataArray.length);
  }, [fetchedDataArray]);

  return (
    <>
      <CarbonHeader />
      <Content >
        <CarbonTable
          headers={ColumnsIBM}
          rows={fetchedDataArray.slice(
            firstRowIndex,
            firstRowIndex + currentPageSize)}
        />
        {totalItems === 0
          ? (<></>)
          : <Pagination
            totalItems={totalItems}
            backwardText="Previous page"
            forwardText="Next page"
            pageSize={currentPageSize}
            pageSizes={[5, 10, 15, 25]}
            itemsPerPageText="Items per page"
            onChange={({page, pageSize}) => {
              if (pageSize !== currentPageSize) {
                setCurrentPageSize(pageSize);
              }
              setFirstRowIndex(pageSize * (page - 1));
            }}
          />}

      </Content>
    </>
  );
}
