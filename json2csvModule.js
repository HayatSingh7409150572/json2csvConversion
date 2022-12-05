const fs = require('fs');
const { Parser } = require('json2csv');
const myData = require('./eclipse_light_TR_25.json');

let arrData = [];
let obj1;

const csv2json = () => {
  try {
    for (let newData of myData.layers) {
      obj1 = {
        id: newData.id,
        source_layer: newData['source-layer'],
        minzoom: newData.minzoom,
        maxzoom: newData.maxzoom,
        text_color: newData.paint['text-color'],
        text_halo_blur: newData.paint['text-halo-blur'],
        text_halo_color: newData.paint['text-halo-color'],
        text_halo_width: newData.paint['icon-halo-width'],
        text_opacity: newData.paint['text-opacity'],
        fill_opacity: newData.paint['fill-opacity'],
        fill_antialias: newData.paint['fill-antialias'],
        fill_color: newData.paint['fill-color'],
        fill_outline_color: newData.paint['fill-outline-color'],
        fill_pattern: newData.paint['fill-pattern'],
        icon_color: newData.paint['icon-color'],
        icon_halo_color: newData.paint['icon-halo-color'],
        icon_halo_width: newData.paint['icon-halo-width'],
        line_color: newData.paint['line-color'],
        line_dasharray: newData.paint['line-dasharray'],
        line_gap_width: newData.paint['line-gap-width'],
        line_opacity: newData.paint['line-opacity'],
        line_pattern: newData.paint['line-pattern'],
        line_width: newData.paint['line-width'],
        background_color: newData.paint['background-color'],
      };

      arrData.push(obj1);
      const parser = new Parser();
      const csvData = parser.parse(arrData);
      //--Creating file by reading all the data from csvData --//
      fs.writeFile('eclipse_light_TR_25.csv', csvData, (err) => {
        if (err) console.log(err);
        else {
          console.log(
            'File data',
            fs.readFileSync('eclipse_light_TR_25.csv', 'utf8')
          );
        }
      });
    }
  } catch (err) {
    console.error(err);
  }
};
csv2json();
