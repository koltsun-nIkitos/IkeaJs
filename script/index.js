'use strict';

import { catalog } from './catalog.js';
import generateHeader from './generateHeader.js';
import generateFooter from './generateFooter.js';
import generateSubCatalog from './generateSubCatalog.js';
import generateCatalog from './generateCatalog.js';
import loadData  from './loadData.js';

generateHeader();
generateCatalog();
generateSubCatalog();
generateFooter();
loadData();
catalog();