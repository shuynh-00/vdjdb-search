import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Search from './Search';
import './App.css';
import Table from './Table';

function App() {
  const [data, setData] = useState(null);
  const [tmpData, setTmpData] = useState(null);

  const [searchValue, setSearchValue] = useState('');

  // useEffect(() => {
  //   // Fetch data from API or use hardcoded data
  //   const dataFromAPI = {
  //     "page": -1,
  //     "pageSize": -1,
  //     "pageCount": -1,
  //     "recordsFound": 40,
  //     "rows": [
  //       {
  //         "entries": ["TRB", "CASSPGWGSYEQYF", "TRBV5-6*01", "TRBJ2-7*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:17893201", "{\"frequency\": \"80%\", \"identification\": \"pentamer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"CD8+\", \"clone.id\": \"\", \"donor.MHC\": \"A03,A32,B14,B27\", \"donor.MHC.method\": \"ARMS\", \"epitope.id\": \"RY10\", \"replica.id\": \"1yr\", \"samples.found\": 3, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV+\", \"subject.id\": \"4054\", \"tissue\": \"PBMC\"}", "{\"cdr3\": \"CASSPGWGSYEQYF\", \"cdr3_old\": \"CASSPGWGSYEQY\", \"fixNeeded\": true, \"good\": true, \"jCanonical\": true, \"jFixType\": \"Realign\", \"jId\": \"TRBJ2-7*01\", \"jStart\": 8, \"oldJFixType\": \"FixAdd\", \"oldJStart\": 9, \"vCanonical\": true, \"vEnd\": 4, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV5-6*01\"}", "1"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 4,
  //           "cdr3jStart": 8
  //         }
  //       }, {
  //         "entries": ["TRB", "CASSPQRGFYEQYF", "TRBV5-6*01", "TRBJ2-7*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:17893201", "{\"frequency\": \"11%\", \"identification\": \"pentamer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"CD8+\", \"clone.id\": \"\", \"donor.MHC\": \"A03,A32,B14,B27\", \"donor.MHC.method\": \"ARMS\", \"epitope.id\": \"RY10\", \"replica.id\": \"1yr\", \"samples.found\": 1, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV+\", \"subject.id\": \"4054\", \"tissue\": \"PBMC\"}", "{\"cdr3\": \"CASSPQRGFYEQYF\", \"cdr3_old\": \"CASSPQRGFYEQY\", \"fixNeeded\": true, \"good\": true, \"jCanonical\": true, \"jFixType\": \"Realign\", \"jId\": \"TRBJ2-7*01\", \"jStart\": 9, \"oldJFixType\": \"FixAdd\", \"oldJStart\": 10, \"vCanonical\": true, \"vEnd\": 4, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV5-6*01\"}", "1"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 4,
  //           "cdr3jStart": 9
  //         }
  //       }, {
  //         "entries": ["TRB", "CASCPGWGSYEQYF", "TRBV5-6*01", "TRBJ2-7*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:17893201", "{\"frequency\": \"4%\", \"identification\": \"pentamer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"CD8+\", \"clone.id\": \"\", \"donor.MHC\": \"A03,A32,B14,B27\", \"donor.MHC.method\": \"ARMS\", \"epitope.id\": \"RY10\", \"replica.id\": \"1yr\", \"samples.found\": 1, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV+\", \"subject.id\": \"4054\", \"tissue\": \"PBMC\"}", "{\"cdr3\": \"CASCPGWGSYEQYF\", \"cdr3_old\": \"CASCPGWGSYEQY\", \"fixNeeded\": true, \"good\": true, \"jCanonical\": true, \"jFixType\": \"Realign\", \"jId\": \"TRBJ2-7*01\", \"jStart\": 8, \"oldJFixType\": \"FixAdd\", \"oldJStart\": 9, \"vCanonical\": true, \"vEnd\": 3, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV5-6*01\"}", "0"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 3,
  //           "cdr3jStart": 8
  //         }
  //       }, {
  //         "entries": ["TRB", "CASSPQKGFYEQYF", "TRBV5-6*01", "TRBJ2-7*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:17893201", "{\"frequency\": \"2%\", \"identification\": \"pentamer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"CD8+\", \"clone.id\": \"\", \"donor.MHC\": \"A03,A32,B14,B27\", \"donor.MHC.method\": \"ARMS\", \"epitope.id\": \"RY10\", \"replica.id\": \"1yr\", \"samples.found\": 1, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV+\", \"subject.id\": \"4054\", \"tissue\": \"PBMC\"}", "{\"cdr3\": \"CASSPQKGFYEQYF\", \"cdr3_old\": \"CASSPQKGFYEQY\", \"fixNeeded\": true, \"good\": true, \"jCanonical\": true, \"jFixType\": \"Realign\", \"jId\": \"TRBJ2-7*01\", \"jStart\": 9, \"oldJFixType\": \"FixAdd\", \"oldJStart\": 10, \"vCanonical\": true, \"vEnd\": 4, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV5-6*01\"}", "0"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 4,
  //           "cdr3jStart": 9
  //         }
  //       }, {
  //         "entries": ["TRB", "CASSPGWGSYEQYF", "TRBV5-6*01", "TRBJ2-7*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:17893201", "{\"frequency\": \"2%\", \"identification\": \"pentamer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"CD8+\", \"clone.id\": \"\", \"donor.MHC\": \"A03,A32,B14,B27\", \"donor.MHC.method\": \"ARMS\", \"epitope.id\": \"RY10\", \"replica.id\": \"1yr\", \"samples.found\": 1, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV+\", \"subject.id\": \"4054\", \"tissue\": \"PBMC\"}", "{\"cdr3\": \"CASSPGWGSYEQYF\", \"cdr3_old\": \"CASSPGWGSYEQY\", \"fixNeeded\": true, \"good\": true, \"jCanonical\": true, \"jFixType\": \"Realign\", \"jId\": \"TRBJ2-7*01\", \"jStart\": 8, \"oldJFixType\": \"FixAdd\", \"oldJStart\": 9, \"vCanonical\": true, \"vEnd\": 4, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV5-6*01\"}", "1"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 4,
  //           "cdr3jStart": 8
  //         }
  //       }, {
  //         "entries": ["TRB", "CASSPGWGSHEQYF", "TRBV5-6*01", "TRBJ2-7*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:17893201", "{\"frequency\": \"2%\", \"identification\": \"pentamer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"CD8+\", \"clone.id\": \"\", \"donor.MHC\": \"A03,A32,B14,B27\", \"donor.MHC.method\": \"ARMS\", \"epitope.id\": \"RY10\", \"replica.id\": \"1yr\", \"samples.found\": 1, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV+\", \"subject.id\": \"4054\", \"tissue\": \"PBMC\"}", "{\"cdr3\": \"CASSPGWGSHEQYF\", \"cdr3_old\": \"CASSPGWGSHEQY\", \"fixNeeded\": true, \"good\": true, \"jCanonical\": true, \"jFixType\": \"Realign\", \"jId\": \"TRBJ2-7*01\", \"jStart\": 10, \"oldJFixType\": \"FixAdd\", \"oldJStart\": 11, \"vCanonical\": true, \"vEnd\": 4, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV5-6*01\"}", "0"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 4,
  //           "cdr3jStart": 10
  //         }
  //       }, {
  //         "entries": ["TRB", "CASSPGWGSYEQYF", "TRBV5-6*01", "TRBJ2-7*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:17893201", "{\"frequency\": \"77%\", \"identification\": \"pentamer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"CD8+\", \"clone.id\": \"\", \"donor.MHC\": \"A03,A32,B14,B27\", \"donor.MHC.method\": \"ARMS\", \"epitope.id\": \"RY10\", \"replica.id\": \"2yr\", \"samples.found\": 1, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV+\", \"subject.id\": \"4054\", \"tissue\": \"PBMC\"}", "{\"cdr3\": \"CASSPGWGSYEQYF\", \"cdr3_old\": \"CASSPGWGSYEQY\", \"fixNeeded\": true, \"good\": true, \"jCanonical\": true, \"jFixType\": \"Realign\", \"jId\": \"TRBJ2-7*01\", \"jStart\": 8, \"oldJFixType\": \"FixAdd\", \"oldJStart\": 9, \"vCanonical\": true, \"vEnd\": 4, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV5-6*01\"}", "1"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 4,
  //           "cdr3jStart": 8
  //         }
  //       }, {
  //         "entries": ["TRB", "CASSSDRSFYGYTF", "TRBV13*01", "TRBJ1-2*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:17893201", "{\"frequency\": \"23%\", \"identification\": \"pentamer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"CD8+\", \"clone.id\": \"\", \"donor.MHC\": \"\", \"donor.MHC.method\": \"\", \"epitope.id\": \"RY10\", \"replica.id\": \"2yr\", \"samples.found\": 1, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV+\", \"subject.id\": \"4054\", \"tissue\": \"PBMC\"}", "{\"cdr3\": \"CASSSDRSFYGYTF\", \"cdr3_old\": \"CASSSDRSFYGYT\", \"fixNeeded\": true, \"good\": true, \"jCanonical\": true, \"jFixType\": \"Realign\", \"jId\": \"TRBJ1-2*01\", \"jStart\": 9, \"oldJFixType\": \"FixAdd\", \"oldJStart\": 10, \"vCanonical\": true, \"vEnd\": 4, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV13*01\"}", "1"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 4,
  //           "cdr3jStart": 9
  //         }
  //       }, {
  //         "entries": ["TRB", "CASSLDRGVGGYTF", "TRBV13*01", "TRBJ1-2*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:17893201", "{\"frequency\": \"100%\", \"identification\": \"pentamer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"CD8+\", \"clone.id\": \"\", \"donor.MHC\": \"A03,A24,B07,B27\", \"donor.MHC.method\": \"ARMS\", \"epitope.id\": \"RY10\", \"replica.id\": \"1yr\", \"samples.found\": 1, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV+\", \"subject.id\": \"5005\", \"tissue\": \"PBMC\"}", "{\"cdr3\": \"CASSLDRGVGGYTF\", \"cdr3_old\": \"CASSLDRGVGGYT\", \"fixNeeded\": true, \"good\": true, \"jCanonical\": true, \"jFixType\": \"Realign\", \"jId\": \"TRBJ1-2*01\", \"jStart\": 10, \"oldJFixType\": \"FixAdd\", \"oldJStart\": 11, \"vCanonical\": true, \"vEnd\": 5, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV13*01\"}", "1"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 5,
  //           "cdr3jStart": 10
  //         }
  //       }, {
  //         "entries": ["TRB", "CASSPGWGNTEAFF", "TRBV5-6*01", "TRBJ1-1*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:17893201", "{\"frequency\": \"56%\", \"identification\": \"pentamer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"CD8+\", \"clone.id\": \"\", \"donor.MHC\": \"\", \"donor.MHC.method\": \"\", \"epitope.id\": \"RY10\", \"replica.id\": \"\", \"samples.found\": 1, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV+\", \"subject.id\": \"1229\", \"tissue\": \"PBMC\"}", "{\"cdr3\": \"CASSPGWGNTEAFF\", \"cdr3_old\": \"CASSPGWGNTEAF\", \"fixNeeded\": true, \"good\": true, \"jCanonical\": true, \"jFixType\": \"Realign\", \"jId\": \"TRBJ1-1*01\", \"jStart\": 8, \"oldJFixType\": \"FixAdd\", \"oldJStart\": 9, \"vCanonical\": true, \"vEnd\": 4, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV5-6*01\"}", "1"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 4,
  //           "cdr3jStart": 8
  //         }
  //       }, {
  //         "entries": ["TRB", "CASSHGLAGVGETQYF", "TRBV4-1*01", "TRBJ2-5*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:17893201", "{\"frequency\": \"16%\", \"identification\": \"pentamer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"CD8+\", \"clone.id\": \"\", \"donor.MHC\": \"\", \"donor.MHC.method\": \"\", \"epitope.id\": \"RY10\", \"replica.id\": \"\", \"samples.found\": 1, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV+\", \"subject.id\": \"1229\", \"tissue\": \"PBMC\"}", "{\"cdr3\": \"CASSHGLAGVGETQYF\", \"cdr3_old\": \"CASSHGLAGVGETQY\", \"fixNeeded\": true, \"good\": true, \"jCanonical\": true, \"jFixType\": \"Realign\", \"jId\": \"TRBJ2-5*01\", \"jStart\": 11, \"oldJFixType\": \"FixAdd\", \"oldJStart\": 12, \"vCanonical\": true, \"vEnd\": 4, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV4-1*01\"}", "1"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 4,
  //           "cdr3jStart": 11
  //         }
  //       }, {
  //         "entries": ["TRB", "CASSLWGERLNTEAFF", "TRBV27*01", "TRBJ1-1*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:17893201", "{\"frequency\": \"5%\", \"identification\": \"pentamer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"CD8+\", \"clone.id\": \"\", \"donor.MHC\": \"\", \"donor.MHC.method\": \"\", \"epitope.id\": \"RY10\", \"replica.id\": \"\", \"samples.found\": 1, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV+\", \"subject.id\": \"1229\", \"tissue\": \"PBMC\"}", "{\"cdr3\": \"CASSLWGERLNTEAFF\", \"cdr3_old\": \"CASSLWGERLNTEAF\", \"fixNeeded\": true, \"good\": true, \"jCanonical\": true, \"jFixType\": \"Realign\", \"jId\": \"TRBJ1-1*01\", \"jStart\": 10, \"oldJFixType\": \"FixAdd\", \"oldJStart\": 11, \"vCanonical\": true, \"vEnd\": 5, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV27*01\"}", "1"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 5,
  //           "cdr3jStart": 10
  //         }
  //       }, {
  //         "entries": ["TRB", "CASSLGWGPNEQFF", "TRBV5-6*01", "TRBJ2-1*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:17893201", "{\"frequency\": \"5%\", \"identification\": \"pentamer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"CD8+\", \"clone.id\": \"\", \"donor.MHC\": \"\", \"donor.MHC.method\": \"\", \"epitope.id\": \"RY10\", \"replica.id\": \"\", \"samples.found\": 1, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV+\", \"subject.id\": \"1229\", \"tissue\": \"PBMC\"}", "{\"cdr3\": \"CASSLGWGPNEQFF\", \"cdr3_old\": \"CASSLGWGPNEQF\", \"fixNeeded\": true, \"good\": true, \"jCanonical\": true, \"jFixType\": \"Realign\", \"jId\": \"TRBJ2-1*01\", \"jStart\": 9, \"oldJFixType\": \"FixAdd\", \"oldJStart\": 10, \"vCanonical\": true, \"vEnd\": 5, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV5-6*01\"}", "1"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 5,
  //           "cdr3jStart": 9
  //         }
  //       }, {
  //         "entries": ["TRB", "CASATIMGGRASNEQFF", "TRBV28*01", "TRBJ2-1*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:17893201", "{\"frequency\": \"5%\", \"identification\": \"pentamer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"CD8+\", \"clone.id\": \"\", \"donor.MHC\": \"\", \"donor.MHC.method\": \"\", \"epitope.id\": \"RY10\", \"replica.id\": \"\", \"samples.found\": 1, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV+\", \"subject.id\": \"1229\", \"tissue\": \"PBMC\"}", "{\"cdr3\": \"CASATIMGGRASNEQFF\", \"cdr3_old\": \"CASATIMGGRASNEQF\", \"fixNeeded\": true, \"good\": true, \"jCanonical\": true, \"jFixType\": \"Realign\", \"jId\": \"TRBJ2-1*01\", \"jStart\": 12, \"oldJFixType\": \"FixAdd\", \"oldJStart\": 13, \"vCanonical\": true, \"vEnd\": 3, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV28*01\"}", "1"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 3,
  //           "cdr3jStart": 12
  //         }
  //       }, {
  //         "entries": ["TRB", "CASSFGWGADSPLHF", "TRBV5-6*01", "TRBJ1-6*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:17893201", "{\"frequency\": \"4%\", \"identification\": \"pentamer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"CD8+\", \"clone.id\": \"\", \"donor.MHC\": \"\", \"donor.MHC.method\": \"\", \"epitope.id\": \"RY10\", \"replica.id\": \"\", \"samples.found\": 1, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV+\", \"subject.id\": \"1229\", \"tissue\": \"PBMC\"}", "{\"cdr3\": \"CASSFGWGADSPLHF\", \"cdr3_old\": \"CASSFGWGADSPLH\", \"fixNeeded\": true, \"good\": true, \"jCanonical\": true, \"jFixType\": \"Realign\", \"jId\": \"TRBJ1-6*01\", \"jStart\": 10, \"oldJFixType\": \"FixAdd\", \"oldJStart\": 11, \"vCanonical\": true, \"vEnd\": 4, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV5-6*01\"}", "0"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 4,
  //           "cdr3jStart": 10
  //         }
  //       }, {
  //         "entries": ["TRB", "CASSPIGRSEAFF", "TRBV28*01", "TRBJ1-1*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:17893201", "{\"frequency\": \"2%\", \"identification\": \"pentamer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"CD8+\", \"clone.id\": \"\", \"donor.MHC\": \"\", \"donor.MHC.method\": \"\", \"epitope.id\": \"RY10\", \"replica.id\": \"\", \"samples.found\": 1, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV+\", \"subject.id\": \"1229\", \"tissue\": \"PBMC\"}", "{\"cdr3\": \"CASSPIGRSEAFF\", \"cdr3_old\": \"CASSPIGRSEAF\", \"fixNeeded\": true, \"good\": true, \"jCanonical\": true, \"jFixType\": \"Realign\", \"jId\": \"TRBJ1-1*01\", \"jStart\": 9, \"oldJFixType\": \"FixAdd\", \"oldJStart\": 10, \"vCanonical\": true, \"vEnd\": 4, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV28*01\"}", "0"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 4,
  //           "cdr3jStart": 9
  //         }
  //       }, {
  //         "entries": ["TRB", "CASSPGWGTYEQYF", "TRBV5-6*01", "TRBJ2-7*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:17893201", "{\"frequency\": \"2%\", \"identification\": \"pentamer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"CD8+\", \"clone.id\": \"\", \"donor.MHC\": \"\", \"donor.MHC.method\": \"\", \"epitope.id\": \"RY10\", \"replica.id\": \"\", \"samples.found\": 1, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV+\", \"subject.id\": \"1229\", \"tissue\": \"PBMC\"}", "{\"cdr3\": \"CASSPGWGTYEQYF\", \"cdr3_old\": \"CASSPGWGTYEQY\", \"fixNeeded\": true, \"good\": true, \"jCanonical\": true, \"jFixType\": \"Realign\", \"jId\": \"TRBJ2-7*01\", \"jStart\": 9, \"oldJFixType\": \"FixAdd\", \"oldJStart\": 10, \"vCanonical\": true, \"vEnd\": 4, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV5-6*01\"}", "0"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 4,
  //           "cdr3jStart": 9
  //         }
  //       }, {
  //         "entries": ["TRB", "CASSLGWGNTEAFF", "TRBV5-6*01", "TRBJ1-1*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:17893201", "{\"frequency\": \"2%\", \"identification\": \"pentamer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"CD8+\", \"clone.id\": \"\", \"donor.MHC\": \"\", \"donor.MHC.method\": \"\", \"epitope.id\": \"RY10\", \"replica.id\": \"\", \"samples.found\": 1, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV+\", \"subject.id\": \"1229\", \"tissue\": \"PBMC\"}", "{\"cdr3\": \"CASSLGWGNTEAFF\", \"cdr3_old\": \"CASSLGWGNTEAF\", \"fixNeeded\": true, \"good\": true, \"jCanonical\": true, \"jFixType\": \"Realign\", \"jId\": \"TRBJ1-1*01\", \"jStart\": 8, \"oldJFixType\": \"FixAdd\", \"oldJStart\": 9, \"vCanonical\": true, \"vEnd\": 5, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV5-6*01\"}", "0"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 5,
  //           "cdr3jStart": 8
  //         }
  //       }, {
  //         "entries": ["TRB", "CASSLGRGPNEQFF", "TRBV5-6*01", "TRBJ2-1*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:17893201", "{\"frequency\": \"2%\", \"identification\": \"pentamer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"CD8+\", \"clone.id\": \"\", \"donor.MHC\": \"\", \"donor.MHC.method\": \"\", \"epitope.id\": \"RY10\", \"replica.id\": \"\", \"samples.found\": 1, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV+\", \"subject.id\": \"1229\", \"tissue\": \"PBMC\"}", "{\"cdr3\": \"CASSLGRGPNEQFF\", \"cdr3_old\": \"CASSLGRGPNEQF\", \"fixNeeded\": true, \"good\": true, \"jCanonical\": true, \"jFixType\": \"Realign\", \"jId\": \"TRBJ2-1*01\", \"jStart\": 9, \"oldJFixType\": \"FixAdd\", \"oldJStart\": 10, \"vCanonical\": true, \"vEnd\": 5, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV5-6*01\"}", "0"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 5,
  //           "cdr3jStart": 9
  //         }
  //       }, {
  //         "entries": ["TRB", "CASSFGWGGETEAFF", "TRBV5-6*01", "TRBJ1-1*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:17893201", "{\"frequency\": \"2%\", \"identification\": \"pentamer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"CD8+\", \"clone.id\": \"\", \"donor.MHC\": \"\", \"donor.MHC.method\": \"\", \"epitope.id\": \"RY10\", \"replica.id\": \"\", \"samples.found\": 1, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV+\", \"subject.id\": \"1229\", \"tissue\": \"PBMC\"}", "{\"cdr3\": \"CASSFGWGGETEAFF\", \"cdr3_old\": \"CASSFGWGGETEAF\", \"fixNeeded\": true, \"good\": true, \"jCanonical\": true, \"jFixType\": \"Realign\", \"jId\": \"TRBJ1-1*01\", \"jStart\": 10, \"oldJFixType\": \"FixAdd\", \"oldJStart\": 11, \"vCanonical\": true, \"vEnd\": 4, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV5-6*01\"}", "0"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 4,
  //           "cdr3jStart": 10
  //         }
  //       }, {
  //         "entries": ["TRB", "CATSNDRDLDEQFF", "TRBV15*01", "TRBJ2-1*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:22210916", "{\"frequency\": \"82.7%\", \"identification\": \"tetramer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"\", \"clone.id\": \"\", \"donor.MHC\": \"\", \"donor.MHC.method\": \"\", \"epitope.id\": \"\", \"replica.id\": \"2mo\", \"samples.found\": 1, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV-positive\", \"subject.id\": \"subject6\", \"tissue\": \"\"}", "{\"cdr3\": \"CATSNDRDLDEQFF\", \"cdr3_old\": \"CATSNDRDLDEQFF\", \"fixNeeded\": false, \"good\": true, \"jCanonical\": true, \"jFixType\": \"NoFixNeeded\", \"jId\": \"TRBJ2-1*01\", \"jStart\": 10, \"oldVEnd\": 2, \"oldVFixType\": \"NoFixNeeded\", \"oldVId\": \"TRBV14*01\", \"vCanonical\": true, \"vEnd\": 4, \"vFixType\": \"ChangeSegment\", \"vId\": \"TRBV15*01\"}", "1"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 4,
  //           "cdr3jStart": 10
  //         }
  //       }, {
  //         "entries": ["TRB", "CASSFGWGGSYNEGFF", "TRBV5-6*01", "TRBJ2-1*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:22210916", "{\"frequency\": \"11.5%\", \"identification\": \"tetramer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"\", \"clone.id\": \"\", \"donor.MHC\": \"\", \"donor.MHC.method\": \"\", \"epitope.id\": \"\", \"replica.id\": \"2mo\", \"samples.found\": 1, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV-positive\", \"subject.id\": \"subject6\", \"tissue\": \"\"}", "{\"cdr3\": \"CASSFGWGGSYNEGFF\", \"cdr3_old\": \"CASSFGWGGSYNEGFF\", \"fixNeeded\": false, \"good\": false, \"jCanonical\": true, \"jFixType\": \"FailedReplace\", \"jId\": \"TRBJ2-1*01\", \"jStart\": -1, \"vCanonical\": true, \"vEnd\": 4, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV5-6*01\"}", "1"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 4,
  //           "cdr3jStart": -1
  //         }
  //       }, {
  //         "entries": ["TRB", "CASSEGTGEHRGAVFF", "TRBV25-1*01", "TRBJ2-2*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:22210916", "{\"frequency\": \"3.8%\", \"identification\": \"tetramer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"\", \"clone.id\": \"\", \"donor.MHC\": \"\", \"donor.MHC.method\": \"\", \"epitope.id\": \"\", \"replica.id\": \"2mo\", \"samples.found\": 1, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV-positive\", \"subject.id\": \"subject6\", \"tissue\": \"\"}", "{\"cdr3\": \"CASSEGTGEHRGAVFF\", \"cdr3_old\": \"CASSEGTGEHRGAVFF\", \"fixNeeded\": false, \"good\": false, \"jCanonical\": true, \"jFixType\": \"FailedReplace\", \"jId\": \"TRBJ2-2*01\", \"jStart\": -1, \"vCanonical\": true, \"vEnd\": 5, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV25-1*01\"}", "0"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 5,
  //           "cdr3jStart": -1
  //         }
  //       }, {
  //         "entries": ["TRB", "CASSWGRANVEQYF", "TRBV5-6*01", "TRBJ2-7*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:22210916", "{\"frequency\": \"1.9%\", \"identification\": \"tetramer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"\", \"clone.id\": \"\", \"donor.MHC\": \"\", \"donor.MHC.method\": \"\", \"epitope.id\": \"\", \"replica.id\": \"2mo\", \"samples.found\": 1, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV-positive\", \"subject.id\": \"subject6\", \"tissue\": \"\"}", "{\"cdr3\": \"CASSWGRANVEQYF\", \"cdr3_old\": \"CASSWGRANVEQYF\", \"fixNeeded\": false, \"good\": true, \"jCanonical\": true, \"jFixType\": \"NoFixNeeded\", \"jId\": \"TRBJ2-7*01\", \"jStart\": 10, \"vCanonical\": true, \"vEnd\": 4, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV5-6*01\"}", "0"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 4,
  //           "cdr3jStart": 10
  //         }
  //       }, {
  //         "entries": ["TRB", "CASSPGLDGEQYF", "TRBV13*01", "TRBJ2-7*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:22210916", "{\"frequency\": \"100.0%\", \"identification\": \"tetramer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"\", \"clone.id\": \"\", \"donor.MHC\": \"\", \"donor.MHC.method\": \"\", \"epitope.id\": \"\", \"replica.id\": \"21mo\", \"samples.found\": 2, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV-positive\", \"subject.id\": \"subject6\", \"tissue\": \"\"}", "{\"cdr3\": \"CASSPGLDGEQYF\", \"cdr3_old\": \"CASSPGLDGEQYF\", \"fixNeeded\": false, \"good\": true, \"jCanonical\": true, \"jFixType\": \"NoFixNeeded\", \"jId\": \"TRBJ2-7*01\", \"jStart\": 9, \"vCanonical\": true, \"vEnd\": 4, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV13*01\"}", "1"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 4,
  //           "cdr3jStart": 9
  //         }
  //       }, {
  //         "entries": ["TRB", "CASSFFLSRERDEQFF", "TRBV28*01", "TRBJ2-1*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:22210916", "{\"frequency\": \"49.3%\", \"identification\": \"tetramer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"\", \"clone.id\": \"\", \"donor.MHC\": \"\", \"donor.MHC.method\": \"\", \"epitope.id\": \"\", \"replica.id\": \"27mo\", \"samples.found\": 1, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV-positive\", \"subject.id\": \"subject6\", \"tissue\": \"\"}", "{\"cdr3\": \"CASSFFLSRERDEQFF\", \"cdr3_old\": \"CASSFFLSRERDEQFF\", \"fixNeeded\": false, \"good\": true, \"jCanonical\": true, \"jFixType\": \"NoFixNeeded\", \"jId\": \"TRBJ2-1*01\", \"jStart\": 12, \"vCanonical\": true, \"vEnd\": 4, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV28*01\"}", "1"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 4,
  //           "cdr3jStart": 12
  //         }
  //       }, {
  //         "entries": ["TRB", "CASSLSGEAGGRYNEQFF", "TRBV7-2*01", "TRBJ2-1*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:22210916", "{\"frequency\": \"30.9%\", \"identification\": \"tetramer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"\", \"clone.id\": \"\", \"donor.MHC\": \"\", \"donor.MHC.method\": \"\", \"epitope.id\": \"\", \"replica.id\": \"27mo\", \"samples.found\": 1, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV-positive\", \"subject.id\": \"subject6\", \"tissue\": \"\"}", "{\"cdr3\": \"CASSLSGEAGGRYNEQFF\", \"cdr3_old\": \"CASSLSGEAGGRYNEQFF\", \"fixNeeded\": false, \"good\": true, \"jCanonical\": true, \"jFixType\": \"NoFixNeeded\", \"jId\": \"TRBJ2-1*01\", \"jStart\": 12, \"vCanonical\": true, \"vEnd\": 5, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV7-2*01\"}", "1"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 5,
  //           "cdr3jStart": 12
  //         }
  //       }, {
  //         "entries": ["TRB", "CASSPGLDGEQYF", "TRBV13*01", "TRBJ2-7*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:22210916", "{\"frequency\": \"19.8%\", \"identification\": \"tetramer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"\", \"clone.id\": \"\", \"donor.MHC\": \"\", \"donor.MHC.method\": \"\", \"epitope.id\": \"\", \"replica.id\": \"27mo\", \"samples.found\": 1, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV-positive\", \"subject.id\": \"subject6\", \"tissue\": \"\"}", "{\"cdr3\": \"CASSPGLDGEQYF\", \"cdr3_old\": \"CASSPGLDGEQYF\", \"fixNeeded\": false, \"good\": true, \"jCanonical\": true, \"jFixType\": \"NoFixNeeded\", \"jId\": \"TRBJ2-7*01\", \"jStart\": 9, \"vCanonical\": true, \"vEnd\": 4, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV13*01\"}", "1"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 4,
  //           "cdr3jStart": 9
  //         }
  //       }, {
  //         "entries": ["TRB", "CASSLDRNTGELFF", "TRBV5-6*01", "TRBJ2-2*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:22210916", "{\"frequency\": \"37.6%\", \"identification\": \"tetramer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"\", \"clone.id\": \"\", \"donor.MHC\": \"\", \"donor.MHC.method\": \"\", \"epitope.id\": \"\", \"replica.id\": \"2mo\", \"samples.found\": 2, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV-positive\", \"subject.id\": \"subject7\", \"tissue\": \"\"}", "{\"cdr3\": \"CASSLDRNTGELFF\", \"cdr3_old\": \"CASSLDRNTGELFF\", \"fixNeeded\": false, \"good\": true, \"jCanonical\": true, \"jFixType\": \"NoFixNeeded\", \"jId\": \"TRBJ2-2*01\", \"jStart\": 7, \"vCanonical\": true, \"vEnd\": 5, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV5-6*01\"}", "1"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 5,
  //           "cdr3jStart": 7
  //         }
  //       }, {
  //         "entries": ["TRB", "CASRDSSYEQYF", "TRBV28*01", "TRBJ2-7*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:22210916", "{\"frequency\": \"30.7%\", \"identification\": \"tetramer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"\", \"clone.id\": \"\", \"donor.MHC\": \"\", \"donor.MHC.method\": \"\", \"epitope.id\": \"\", \"replica.id\": \"2mo\", \"samples.found\": 2, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV-positive\", \"subject.id\": \"subject7\", \"tissue\": \"\"}", "{\"cdr3\": \"CASRDSSYEQYF\", \"cdr3_old\": \"CASRDSSYEQYF\", \"fixNeeded\": false, \"good\": true, \"jCanonical\": true, \"jFixType\": \"NoFixNeeded\", \"jId\": \"TRBJ2-7*01\", \"jStart\": 6, \"vCanonical\": true, \"vEnd\": 3, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV28*01\"}", "1"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 3,
  //           "cdr3jStart": 6
  //         }
  //       }, {
  //         "entries": ["TRB", "CASSPGWGLDEQFF", "TRBV7-6*01", "TRBJ2-1*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:22210916", "{\"frequency\": \"13.6%\", \"identification\": \"tetramer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"\", \"clone.id\": \"\", \"donor.MHC\": \"\", \"donor.MHC.method\": \"\", \"epitope.id\": \"\", \"replica.id\": \"2mo\", \"samples.found\": 1, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV-positive\", \"subject.id\": \"subject7\", \"tissue\": \"\"}", "{\"cdr3\": \"CASSPGWGLDEQFF\", \"cdr3_old\": \"CASSPGWGLDEQFF\", \"fixNeeded\": false, \"good\": true, \"jCanonical\": true, \"jFixType\": \"NoFixNeeded\", \"jId\": \"TRBJ2-1*01\", \"jStart\": 10, \"vCanonical\": true, \"vEnd\": 4, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV7-6*01\"}", "1"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 4,
  //           "cdr3jStart": 10
  //         }
  //       }, {
  //         "entries": ["TRB", "CATSDDGTPNNEQFF", "TRBV24-1*01", "TRBJ2-1*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:22210916", "{\"frequency\": \"10.2%\", \"identification\": \"tetramer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"\", \"clone.id\": \"\", \"donor.MHC\": \"\", \"donor.MHC.method\": \"\", \"epitope.id\": \"\", \"replica.id\": \"2mo\", \"samples.found\": 2, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV-positive\", \"subject.id\": \"subject7\", \"tissue\": \"\"}", "{\"cdr3\": \"CATSDDGTPNNEQFF\", \"cdr3_old\": \"CATSDDGTPNNEQFF\", \"fixNeeded\": false, \"good\": true, \"jCanonical\": true, \"jFixType\": \"NoFixNeeded\", \"jId\": \"TRBJ2-1*01\", \"jStart\": 10, \"vCanonical\": true, \"vEnd\": 5, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV24-1*01\"}", "1"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 5,
  //           "cdr3jStart": 10
  //         }
  //       }, {
  //         "entries": ["TRB", "CASSVGWGSETQYF", "TRBV9*01", "TRBJ2-5*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:22210916", "{\"frequency\": \"6.8%\", \"identification\": \"tetramer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"\", \"clone.id\": \"\", \"donor.MHC\": \"\", \"donor.MHC.method\": \"\", \"epitope.id\": \"\", \"replica.id\": \"2mo\", \"samples.found\": 2, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV-positive\", \"subject.id\": \"subject7\", \"tissue\": \"\"}", "{\"cdr3\": \"CASSVGWGSETQYF\", \"cdr3_old\": \"CASSVGWGSETQYF\", \"fixNeeded\": false, \"good\": true, \"jCanonical\": true, \"jFixType\": \"NoFixNeeded\", \"jId\": \"TRBJ2-5*01\", \"jStart\": 9, \"vCanonical\": true, \"vEnd\": 5, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV9*01\"}", "1"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 5,
  //           "cdr3jStart": 9
  //         }
  //       }, {
  //         "entries": ["TRB", "CASSLDGNTGELFF", "TRBV5-6*01", "TRBJ2-2*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:22210916", "{\"frequency\": \"1.1%\", \"identification\": \"tetramer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"\", \"clone.id\": \"\", \"donor.MHC\": \"\", \"donor.MHC.method\": \"\", \"epitope.id\": \"\", \"replica.id\": \"2mo\", \"samples.found\": 1, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV-positive\", \"subject.id\": \"subject7\", \"tissue\": \"\"}", "{\"cdr3\": \"CASSLDGNTGELFF\", \"cdr3_old\": \"CASSLDGNTGELFF\", \"fixNeeded\": false, \"good\": true, \"jCanonical\": true, \"jFixType\": \"NoFixNeeded\", \"jId\": \"TRBJ2-2*01\", \"jStart\": 7, \"vCanonical\": true, \"vEnd\": 5, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV5-6*01\"}", "0"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 5,
  //           "cdr3jStart": 7
  //         }
  //       }, {
  //         "entries": ["TRB", "CASSLDRNTGELFF", "TRBV5-6*01", "TRBJ2-2*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:22210916", "{\"frequency\": \"50.0%\", \"identification\": \"tetramer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"\", \"clone.id\": \"\", \"donor.MHC\": \"\", \"donor.MHC.method\": \"\", \"epitope.id\": \"\", \"replica.id\": \"16mo\", \"samples.found\": 1, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV-positive\", \"subject.id\": \"subject7\", \"tissue\": \"\"}", "{\"cdr3\": \"CASSLDRNTGELFF\", \"cdr3_old\": \"CASSLDRNTGELFF\", \"fixNeeded\": false, \"good\": true, \"jCanonical\": true, \"jFixType\": \"NoFixNeeded\", \"jId\": \"TRBJ2-2*01\", \"jStart\": 7, \"vCanonical\": true, \"vEnd\": 5, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV5-6*01\"}", "1"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 5,
  //           "cdr3jStart": 7
  //         }
  //       }, {
  //         "entries": ["TRB", "CASRDSSYEQYF", "TRBV28*01", "TRBJ2-7*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:22210916", "{\"frequency\": \"16.1%\", \"identification\": \"tetramer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"\", \"clone.id\": \"\", \"donor.MHC\": \"\", \"donor.MHC.method\": \"\", \"epitope.id\": \"\", \"replica.id\": \"16mo\", \"samples.found\": 1, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV-positive\", \"subject.id\": \"subject7\", \"tissue\": \"\"}", "{\"cdr3\": \"CASRDSSYEQYF\", \"cdr3_old\": \"CASRDSSYEQYF\", \"fixNeeded\": false, \"good\": true, \"jCanonical\": true, \"jFixType\": \"NoFixNeeded\", \"jId\": \"TRBJ2-7*01\", \"jStart\": 6, \"vCanonical\": true, \"vEnd\": 3, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV28*01\"}", "1"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 3,
  //           "cdr3jStart": 6
  //         }
  //       }, {
  //         "entries": ["TRB", "CASSDTLNTEAFF", "TRBV10-1*01", "TRBJ1-1*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:22210916", "{\"frequency\": \"14.5%\", \"identification\": \"tetramer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"\", \"clone.id\": \"\", \"donor.MHC\": \"\", \"donor.MHC.method\": \"\", \"epitope.id\": \"\", \"replica.id\": \"16mo\", \"samples.found\": 1, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV-positive\", \"subject.id\": \"subject7\", \"tissue\": \"\"}", "{\"cdr3\": \"CASSDTLNTEAFF\", \"cdr3_old\": \"CASSDTLNTEAFF\", \"fixNeeded\": false, \"good\": true, \"jCanonical\": true, \"jFixType\": \"NoFixNeeded\", \"jId\": \"TRBJ1-1*01\", \"jStart\": 7, \"vCanonical\": true, \"vEnd\": 4, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV10-1*01\"}", "1"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 4,
  //           "cdr3jStart": 7
  //         }
  //       }, {
  //         "entries": ["TRB", "CASSVGWGSETQYF", "TRBV9*01", "TRBJ2-5*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:22210916", "{\"frequency\": \"8.0%\", \"identification\": \"tetramer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"\", \"clone.id\": \"\", \"donor.MHC\": \"\", \"donor.MHC.method\": \"\", \"epitope.id\": \"\", \"replica.id\": \"16mo\", \"samples.found\": 1, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV-positive\", \"subject.id\": \"subject7\", \"tissue\": \"\"}", "{\"cdr3\": \"CASSVGWGSETQYF\", \"cdr3_old\": \"CASSVGWGSETQYF\", \"fixNeeded\": false, \"good\": true, \"jCanonical\": true, \"jFixType\": \"NoFixNeeded\", \"jId\": \"TRBJ2-5*01\", \"jStart\": 9, \"vCanonical\": true, \"vEnd\": 5, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV9*01\"}", "1"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 5,
  //           "cdr3jStart": 9
  //         }
  //       }, {
  //         "entries": ["TRB", "CATSDDGTPNNEQFF", "TRBV24-1*01", "TRBJ2-1*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:22210916", "{\"frequency\": \"6.4%\", \"identification\": \"tetramer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"\", \"clone.id\": \"\", \"donor.MHC\": \"\", \"donor.MHC.method\": \"\", \"epitope.id\": \"\", \"replica.id\": \"16mo\", \"samples.found\": 1, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV-positive\", \"subject.id\": \"subject7\", \"tissue\": \"\"}", "{\"cdr3\": \"CATSDDGTPNNEQFF\", \"cdr3_old\": \"CATSDDGTPNNEQFF\", \"fixNeeded\": false, \"good\": true, \"jCanonical\": true, \"jFixType\": \"NoFixNeeded\", \"jId\": \"TRBJ2-1*01\", \"jStart\": 10, \"vCanonical\": true, \"vEnd\": 5, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV24-1*01\"}", "1"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 5,
  //           "cdr3jStart": 10
  //         }
  //       }, {
  //         "entries": ["TRB", "CASTNREVLHEQFF", "TRBV2*01", "TRBJ2-1*01", "HomoSapiens", "HLA-A*03:01", "B2M", "MHCI", "RLRPGGKKK", "Gag", "HIV-1", "PMID:22210916", "{\"frequency\": \"3.2%\", \"identification\": \"tetramer-sort\", \"sequencing\": \"sanger\", \"singlecell\": \"\", \"verification\": \"\"}", "{\"cell.subset\": \"\", \"clone.id\": \"\", \"donor.MHC\": \"\", \"donor.MHC.method\": \"\", \"epitope.id\": \"\", \"replica.id\": \"16mo\", \"samples.found\": 1, \"structure.id\": \"\", \"studies.found\": 1, \"study.id\": \"\", \"subject.cohort\": \"HIV-positive\", \"subject.id\": \"subject7\", \"tissue\": \"\"}", "{\"cdr3\": \"CASTNREVLHEQFF\", \"cdr3_old\": \"CASTNREVLHEQFF\", \"fixNeeded\": false, \"good\": true, \"jCanonical\": true, \"jFixType\": \"NoFixNeeded\", \"jId\": \"TRBJ2-1*01\", \"jStart\": 10, \"vCanonical\": true, \"vEnd\": 3, \"vFixType\": \"NoFixNeeded\", \"vId\": \"TRBV2*01\"}", "0"],
  //         "metadata": {
  //           "pairedID": "0",
  //           "cdr3vEnd": 3,
  //           "cdr3jStart": 10
  //         }

  //       }]
  //   };

  //   setData(dataFromAPI);
  // }, []);

  // if (!data) {
  //   return "Loading data...";
  // }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          method: 'post',
          url: 'https://cors-anywhere.herokuapp.com/https://vdjdb.cdr3.net/api/database/search',
          headers: { 'Content-Type': 'application/json' },
          data: {
            filters: [
              {
                column: 'antigen.epitope',
                // value: 'RLRPGGKKK',
                value: searchValue,
                filterType: 'exact',
                negative: false,
              },
            ],
            paired: true,
          },
        });

        // handle success
        console.log(response.data);
        setData(response.data)
      } catch (error) {
        // handle error
        console.log(error);
      }
    };
    fetchData();
  }, [searchValue]);





  const handleSearch = (newValue) => {
    setSearchValue(newValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>VDJdb Search</h1>
        <Search onSearch={handleSearch} />
        {console.log(searchValue)}
        {console.log(`result is: ${JSON.stringify(data)}`)}
      </header>
      <Table dataString={JSON.stringify(data)} />
    </div>
  );
}

export default App;