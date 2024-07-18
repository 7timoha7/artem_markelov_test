import {createAsyncThunk} from "@reduxjs/toolkit";
import {ProductType} from "../../types";
import axios from "axios";

export const productsFetch = createAsyncThunk<ProductType>('products/fetch', async () => {
  const response = await axios.post('https://api.uno.kg/graphql/', {
    query: `
          query Barcode {
            barcode(id: 365) {
              id
              barcodeValue
              title
              description
              deleted
              sellingPrice
              slug
              archived
              createdAt
              mute
              discountedPrice
              cost
              tags
              characteristic
              category {
                id
                name
                slug
                icon
                icon1
                isActive
                prioritization
                inTrend
                lft
                rght
                treeId
                level
                parent {
                  id
                  name
                  slug
                  icon
                  icon1
                  isActive
                  prioritization
                  inTrend
                  lft
                  rght
                  treeId
                  level
                }
              }
              images {
                id
                url
              }
              sizes {
                edges {
                  node {
                    id
                    name
                    value
                  }
                }
              }
            }
          }
        `,
  });
  return response.data.data.barcode;
});
