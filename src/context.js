import React, {useState, useContext, useEffect} from 'react'
import { getData, filterData } from './components/chat/getdata';


export const EditorContext = React.createContext();



const airtableBase = 'appxx96ID9GpxKqCp'
const airtableUrl = `https://api.airtable.com/v0/${airtableBase}`;
const readonlyAPIKEY = 'keyQwGu1et7cAKIz8';






export function ContextProvider({children}) {

  const [faq, setFaq] = useState()
  const [routes, setRoutes] = useState()
  const [qa, setQa] = useState()
  const [data, setData] = useState()

  const [adminKey, setAdminKey] = useState()

  var Airtable = require('airtable');
  var base = new Airtable({apiKey: adminKey ? adminKey : readonlyAPIKEY}).base(airtableBase);


const updateQA = () => {
  base('qa').select({
    // maxRecords: 3,
    // view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.
      // records.forEach(function(record) {
      //     console.log('Retrieved', record.get('short_name'));
      //     console.log('Retrieved', record.get('answers'));
      //     console.log('Retrieved', record.get('routes'));
      // });
      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      // fetchNextPage();
      setQa(records)

  }, function done(err) {
      if (err) { console.error(err); return; }
  });
}

const updateQARoutes = () => {
  console.log('routes = ', routes);
  console.log('qa = ', qa);

  let newData = {}

  let currentRoute = '/site_builder';

  let getRouteData = (currentRouteData) => {
    let ret = []

    if (currentRouteData && currentRouteData.get('qa')) currentRouteData.get('qa').forEach((oneQid, ind) => {
      let oneQdata = getData(qa, oneQid, null, true );

      // let oneAdata = getData(qa, oneQdata.get('answer')[0], null, true);
      ret.push({
        id: oneQid,
        routes: oneQdata.get('routes'),
        short_name: oneQdata.get('short_name'),
        long_name: oneQdata.get('long_name'),
        answer: oneQdata.get('answer'),
        video_url: oneQdata.get('video_url'),
        link_more: oneQdata.get('link_more'),
      })

    })

    return ret
  }

  routes.forEach((oneRoute, ind)=> {
    let rt = oneRoute.get('route');
    newData[rt] = {answers: [...getRouteData(oneRoute)]}
  })


  setData(newData)
}





  useEffect(() => {
    if (!qa) {
      updateQA()
    }

    if (!routes) {
      base('routes').select().eachPage(function page(records, fetchNextPage) {
          setRoutes(records)
      }, function done(err) {
          if (err) { console.error(err); return; }
      });
    }


    if (qa && routes) {
      updateQARoutes()
    }


  }, [routes, qa])


  const saveData =  (id, newData) => {

    debugger
    base("qa").update([ {
          id: id,
          fields: {
            ...newData
          },
        },],

      function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        updateQA()

        updateQARoutes()

      }
    );


  }



  return (
    <div>
      <EditorContext.Provider
        value={{
          saveData: saveData,
          routes: routes,
          data: data,
          adminKey: adminKey,
          setAdminKey: setAdminKey,
        }}
      >
        {children}
      </EditorContext.Provider>
    </div>
  )
}
