import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import RenderBtn from './RenderBtn';
import SendModalv2 from './SendModalv2';
import axios from 'axios';
import { FixedSizeList } from 'react-window';



export default function SalesTablev2({ setUpdate, update }) {
  const [filesData, setFilesData] = useState(null);
  function renderRow({ index, style}) {
    console.log(index, style);
    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemText primary={`Item ${index + 1}`} />
        <RenderBtn fileId={filesData[index].id} />
        <SendModalv2 fileId={filesData[index].id} setUpdate={setUpdate} update={update} />
      </ListItem>
    );
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/khats/getAllFilesData', {
          headers: {
            authorization: JSON.parse(localStorage.getItem('token'))
          }
        });
        console.log('got the files');
        setFilesData(response.data.files);
      } catch (err) {
        console.log(err.response && err.response.data.error ? err.response.data.error : 'Failed to fetch files');
      }
    };

    fetchData();
  }, []);

  if (!filesData) return (
    <div style={{ width: '100%', height:250, border: '1px solid black' }}></div>
  ); // Render nothing until filesData is fetched
  console.log(filesData);
  return (
    <Box
      sx={{ width: '100%', height: 250, maxWidth: '100%', bgcolor: 'background.paper', border: 1 }}
    >
      <FixedSizeList
        height={250}
        width={'100%'}
        itemSize={50}
        // itemCount={200}
        itemCount={filesData.length}
        overscanCount={5}
      >
        {/* {({ index, style }) => renderRow({ index, style, fileData: filesData[index] })} */}
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}
