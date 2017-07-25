(function(jQuery) {
jQuery.app = {
    "LRS": {
        "abs": "ABS", 
        "cumulated": "Cumulated", 
        "export": {
            "end": "End", 
            "fullRoad": "Full road", 
            "previewPage": "añadir visión general", 
            "start": "Start", 
            "template": "Template", 
            "title": "Exportar el sinóptico", 
            "visibleRegion": "Visible region"
        }, 
        "exportTooltip": "Export", 
        "h_offset": "H offset", 
        "layersModeCondensedTooltip": "Mostrar capas sobre el mismo eje", 
        "layersModeIndividualTooltip": "Mostrar las capas por separado", 
        "orientationsModeTooltip": "Cambiar la orientación", 
        "pr": "PR", 
        "road": "road", 
        "v_offset": "V offset"
    }, 
    "LRSSchematic": {
        "noData": "No data to show!", 
        "title": "LRS schematic"
    }, 
    "app_i18n_dictionary": {
        "ROLE_ADMINISTRATOR": "Administrador", 
        "ROLE_DE": "DE", 
        "ROLE_EXTERNAL_CONTRIBUTOR": "Colaborador externo", 
        "ROLE_Foncier": "Foncier", 
        "ROLE_General": "General", 
        "ROLE_INTERNAL_CONTRIBUTOR": "Colaborador interno", 
        "ROLE_PLATFORM_ADMIN": "Administrator de la plataforma", 
        "ROLE_USER": "Consulta"
    }, 
    "attachments": {
        "addNew": "Add new attachment", 
        "buttonAddTitle": "Ajouter une fichero adjunto", 
        "description": "Description", 
        "downloadAll": "Download all", 
        "downloadedTo": "Attachment file downloaded to: ", 
        "fileName": "File name", 
        "name": "Name", 
        "noAttachments": "No fichero adjunto encontrado", 
        "owner": "Owner", 
        "saveError": "Not all attachments saved", 
        "saveSuccess": "Attachments saved", 
        "title": "Fichero adjunto"
    }, 
    "button": {
        "add": "Add", 
        "cancel": "Cancelar", 
        "clear": "Clear", 
        "close": "Close", 
        "copy": "Copy", 
        "deleteButton": "Suprimir", 
        "edit": "Edit", 
        "editDefaultSettings": "Editar los ajustes por defecto", 
        "editGeometry": "Edit geometry", 
        "editLRS": "Edit LRS", 
        "editLayerMetadata": "Edit metadata", 
        "insertGPSPosition": "Create point from coordinates", 
        "insertLRSLine": "Create line from LRS", 
        "modify": "Modificar", 
        "newGroupFromEmpty": "Nuevo vacio", 
        "newGroupFromExisting": "Nuevo apartir del existente", 
        "ok": "Ok", 
        "save": "Guardar", 
        "showAll": "Show all", 
        "showMore": "Show more", 
        "viewLink": "Générer un lien", 
        "zoomToFeature": "zoom to feature"
    }, 
    "comments": {
        "addNew": "Add new attachment", 
        "buttonAddTitle": "Ajouter une comment", 
        "downloadedTo": "Attachment file downloaded to: ", 
        "noComments": "No comments", 
        "saveError": "Not all attachments saved", 
        "saveSuccess": "Attachments saved", 
        "searchLabels": {
            "author": "Author", 
            "content": "Content", 
            "created": "Created", 
            "featureId": "Feature", 
            "layerId": "Layer", 
            "level": "Level", 
            "modified": "modified", 
            "title": "Title", 
            "type": "Type", 
            "typeLabels": {
                "ALERT": "Alert", 
                "INFO": "Info", 
                "WARNING": "Warning", 
                "title": "Type"
            }
        }, 
        "title": "Comments"
    }, 
    "cookieWarning": "By continuing your visit to this site, you accept the use of cookies.", 
    "deleteDocument": "Suprimir documento", 
    "diagnostic": {
        "code": "Code", 
        "colorCode": "Color code", 
        "degradationConfigs": "Degradation configs", 
        "degradationNoteConfigs": "Degradation note configs", 
        "description": "Description", 
        "maxInlusive": "Max inclusive", 
        "maxLimit": "Max limit", 
        "minInlusive": "Min inclusive", 
        "minLimit": "Min limit", 
        "name": "Name", 
        "structure": "Structure", 
        "surface": "Surface", 
        "type": "Type"
    }, 
    "editFeature": "Edit feature", 
    "editFeatureGeometry": "Edit Geometry", 
    "editLayerMetadataEditValuesPopup": {
        "attribute": "Attribute", 
        "dynamicValues": "Layer", 
        "layer": "Layer", 
        "saveButton": "Ok", 
        "staticValues": "Values", 
        "title": "Edit values for attribute: ", 
        "values": {
            "autoGenerate": "Auto generate", 
            "autoGenerateConfirm": "Existing values will be deleted. Are you sure?", 
            "autoGenerateNoValues": "No values", 
            "errorAutoGenerate": "Error occured when auto generate values.", 
            "myNewVal": "My new value", 
            "title": "Values", 
            "valueCannotBeEmpty": "Value cannot be empty", 
            "valueExist": "Value exist", 
            "wrongFormat": "Wrong format"
        }
    }, 
    "editLayerMetadataPopup": {
        "attributes": {
            "alias": "Alias", 
            "displayInInfo": "Display in info", 
            "name": "Name", 
            "noAttributes": "No attributes", 
            "title": "Attributes", 
            "values": "Values"
        }, 
        "browserNotSupported": "Feature not supported in this browser", 
        "emailUsers": "Email users", 
        "errorImporting": "Error importing layer metadata", 
        "exportButton": "Export", 
        "hasParent": "Has parent?", 
        "importButton": "Import", 
        "links": "Links", 
        "metadata": "Metadata", 
        "overwriteLayerMetadata": "Overwrite layer metadata?", 
        "parentIDField": "Parent ID field", 
        "parentIDFieldValue": "Parent ID field value", 
        "parentLayerIDFieldTitle": "The field that uniquely identifies the parent", 
        "parentLayerIDFieldValueTitle": "The field that gives the value of the parent unique field value", 
        "parentLayerName": "Parent layer name", 
        "parentLayerNameTitle": "The parent layer name", 
        "permissionAdd": "Add comment", 
        "permissionDelete": "Delete comment", 
        "permissions": "Permissions", 
        "representativeField": "Representative field", 
        "saveButton": "Ok", 
        "title": "Edit layer metadata"
    }, 
    "error": "Error", 
    "errorServer": "Error interna del servidor", 
    "errors": {
        "email": "Por favor entrar un e-mail correcto.", 
        "error": "Error", 
        "errorRequiredFields": "Please fill in all required fields", 
        "featuresNotSaved": "Error saving features", 
        "getFeature": "No object found", 
        "getFeatureId": "No object id found", 
        "getLRSForFeature": "Error getting LRS for feature.", 
        "getLRSForFeatureTable": "Error getting LRS for selected feature row.", 
        "getLRSGeometryForFeature": "Error getting LRS geometry for feature. Save anyway?", 
        "imajnetConnectError": "Imajnet connection error", 
        "importNoAttribute": "Ningun atributo que enviar", 
        "inputLength": "un campo es obligatorio, la longitud debe ser inferior a: ", 
        "isNotValid": " no es un válido ", 
        "isRequired": " requerido ", 
        "noFile": "Ningun fichero seleccionado", 
        "noLayerSelected": "Ninguna capa seleccionada", 
        "notEmpty": "cannot be empty", 
        "positionNotOnRoad": "Position is not on the road", 
        "reserve": "Error getting reserves", 
        "wrongFormat": "formato incorrecto"
    }, 
    "externalLayers": {
        "loginError": "External layer login error: "
    }, 
    "filter": {
        "NULL": "Unfilled"
    }, 
    "generateReport": "Generate report", 
    "geoserver": {
        "reload": "Por favor espere mientras la configuración GeoServer vuelve a cargar", 
        "reset": "Por favor espere mientras GeoServer reinicia"
    }, 
    "importLayer": {
        "Date": "Date", 
        "Double": "Double", 
        "Float": "Float", 
        "Integer": "Integer", 
        "LRSReferencedLayer": "Capa referenciada sobre el LRS", 
        "Long": "Long", 
        "MultiLineString": "Line", 
        "MultiPolygon": "Polygon", 
        "Point": "Point", 
        "String": "String", 
        "Timestamp": "Timestamp", 
        "addNewAttribute": "Add new attribute", 
        "attributeName": "Nombre", 
        "attributes": "Atributos", 
        "category": "Categoría", 
        "error": "Error al añadir capa", 
        "errorRequiredFields": "Por favor rellene todos los campos requeridos", 
        "externalLayer": "Capa externa", 
        "geometryType": "Tipo de Geometría", 
        "internalLayer": "Capa interna", 
        "newLayerDescription": "Descripción", 
        "newLayerName": "Nombre", 
        "newLayerTitle": "Título", 
        "noStyle": "Estilo por defecto", 
        "nullable": "Valor obligatoria", 
        "publicLayer": "Capa pública", 
        "selectDefaultStyle": "Seleccionar un estilo por defecto", 
        "selectWorkspace": "Workspace", 
        "type": "Tipo"
    }, 
    "limitByCondition": {
        "addCondition": "Añadir condición", 
        "limitConditionMatch": "Match", 
        "limitConditionMatchAll": "Todos", 
        "limitConditionMatchAny": "Cualquier", 
        "limitConditionMatchNone": "Ninguno", 
        "limitConditionMatchOfFollowing": "del siguiente", 
        "title": "Limitar por condición"
    }, 
    "loading": "Cargando...", 
    "log": {
        "data": "Datos", 
        "date": "Fecha", 
        "id": "Id", 
        "title": "Eventos(Logs)", 
        "type": "Tipo", 
        "user": "Usurio"
    }, 
    "login": {
        "publicLogin": {
            "text": "Access the application using the public login.", 
            "title": "Public login"
        }, 
        "serviceUnavailable": "Application est en maintenance. S'il vous plaît réessayer plus tard."
    }, 
    "map": {
        "button": {
            "RazelDICT": "Dessiner DICT", 
            "RazelDMSR": "Dessiner DMSR", 
            "addFeatures": "Añadir datos", 
            "deleteFeatures": "Cancelar datos", 
            "disable": "Inactivo", 
            "drawFeatures": "Dibujat datos", 
            "edit": "Editar", 
            "exportFeatures": "Exportar datos", 
            "globalTimeline": "Timeline", 
            "information": "Información", 
            "insertPGSPosition": "Create point", 
            "measureLine": "Medir Linea", 
            "measureSurface": "Medir superficie", 
            "modifyFeatures": "Modificar datos", 
            "nextView": "Vista siguiente", 
            "oleDrawHole": "Draw hole", 
            "oleMergeFeature": "Merge selected geometry", 
            "oleMergeFeatureSelectFeature": "Please select at least 2 geometries.", 
            "oleSelectFeature": "Select geometry", 
            "oleSplitFeature": "Split selected geometry", 
            "oleTransformFeature": "Scale, rotate and move geometry", 
            "predefinedZoom": {
                "department": "Departmento", 
                "interTown": "Zona urbana", 
                "neighborhood": "Barrio", 
                "region": "Región", 
                "street": "Calle", 
                "title": "Vista general", 
                "town": "Ciudad"
            }, 
            "previousView": "Vista precedente", 
            "print": "Imprimir", 
            "saveFeatures": "Guardar datos", 
            "search": "Buscar", 
            "searchReserve": "Show associated reserves", 
            "searchReserves": "Gestion reserves", 
            "selectFeatures": "Seleccionar datos", 
            "view": "Vista", 
            "zoomIn": "Zoom", 
            "zoomOut": "Alejar", 
            "zoomToFeature": "Zoom hacia el objecto"
        }, 
        "created": "Creado", 
        "emptyBaseLayer": "No hay capas", 
        "error": {
            "activeLayers": "No capas activas encontradas", 
            "documentNotAvailable": "Documento non disponible", 
            "editFeatures": "Datos no pueden estar editado", 
            "features": "No datos disponibles", 
            "getCapabilities": "Dificultad para conseguir capacidades"
        }, 
        "exitEditMode": "Please exit edit mode before continue!", 
        "featuresListing": {
            "LRSConstraintTitle": "Recherche par PR+Abs", 
            "buttonDelete": "Suprimir los objetos seleccionados", 
            "buttonExport": "Exportar", 
            "buttonSave": "Save", 
            "buttonSelectAll": "Seleccionar todo", 
            "buttonUnSelectAll": "Unselect all", 
            "buttonWPS": "Statistics", 
            "buttonZoomToExtent": "Zoom hacia los datos seleccionados", 
            "deleteConfirm": "Esta seguro que desea suprimir los datos seleccionados?", 
            "deleteError": "Error al suprimir los datos seleccionados", 
            "deleteSuccess": "Features deleted"
        }, 
        "len": "Length", 
        "map": {
            "title": "Mapa"
        }, 
        "mapAndThematicGroups": {
            "title": "Map"
        }, 
        "modified": "Modificado", 
        "noLayersAvailableText": "Por favor comuníquese con el administrador", 
        "noLayersAvailableTitle": "No hay capas disponibles", 
        "popup": {
            "title": "Ajustes"
        }, 
        "popupAboutImajnet": {
            "title": "Acerca Imajnet"
        }, 
        "popupAddAttachments": {
            "addNew": "Añadir", 
            "addNewDescription": "Descripción", 
            "addNewFile": "Archivo", 
            "addNewName": "Nombre", 
            "addNewReference": "Document de référence", 
            "addReservePicture": "Add reserve picture", 
            "attachmentDeleted": "Archivo adjunto eliminado", 
            "attachmentError": "Error al cargar archivo adjunto", 
            "cancel": "Cancelar", 
            "close": "Cerrar", 
            "del": "Eliminar", 
            "deleteConfirm": "Esta seguro que desea suprimir el archivo adjunto?", 
            "errorDelete": "Imposible suprimir archivo adjunto", 
            "errorDownload": "Impossible cargar archivo adjunto", 
            "errorPicture": "Some attachments don't have picture.", 
            "errorUpload": "Not all attachments uploaded to server, u can try again later by clicking save objects in menu.", 
            "fileDetails": "Detalles del archivo", 
            "save": "Guardar", 
            "title": "Añadir documentos"
        }, 
        "popupAddComments": {
            "addNew": "Add", 
            "cancel": "Cancel", 
            "close": "Close", 
            "commentDeleted": "Comment deleted", 
            "commentError": "Unable to load comment", 
            "del": "Delete", 
            "deleteConfirm": "Are you sure that you wish to delete the comment?", 
            "errorDelete": "Unable to delete comment", 
            "save": "Save", 
            "title": "Add comments"
        }, 
        "popupAddFeatureOnDraw": {
            "cancel": "Cancelar", 
            "errorFeatureInsert": "Imposible añadir datos", 
            "save": "Guardar", 
            "title": "Añadir datos"
        }, 
        "popupAttachFiles": {
            "title": "Adjuntar archivo"
        }, 
        "popupCreateGeosign": {
            "description": "Description", 
            "title": "New geosign", 
            "titleField": "Title"
        }, 
        "popupCreateNewExternalLayer_add": {
            "newLayerSearchable": "Interrogeable", 
            "newLayerTileProtocol": "Tile protocol", 
            "newLayerTileUrl": "Tile url", 
            "newLayerVectorProtocol": "Vector protocol", 
            "newLayerVectorUrl": "Vector url", 
            "title": "Create new external layer"
        }, 
        "popupCreateNewExternalLayer_edit": {
            "newLayerSearchable": "Interrogeable", 
            "newLayerTileProtocol": "Tile protocol", 
            "newLayerTileUrl": "Tile url", 
            "newLayerVectorProtocol": "Vector protocol", 
            "newLayerVectorUrl": "Vector url", 
            "title": "Edit external layer"
        }, 
        "popupCreateNewLayer": {
            "title": "Crear nueva capa"
        }, 
        "popupEventAddFeature": {
            "cancel": "Cancelar", 
            "save": "Guardar", 
            "title": "Añadir datos"
        }, 
        "popupExportFeatures": {
            "exportError": "Export error", 
            "exportInProgress": "Export in progress", 
            "exportNoData": "No data to export", 
            "exportSuccess": "Export success", 
            "exportTo": "Export to", 
            "noLayersToExport": "No hay capas que exportar", 
            "noPermissionToExport": "No tiene permiso para exportar", 
            "selectFeaturesFromMap": "Seleccionar datos del mapa", 
            "title": "Exportar datos"
        }, 
        "popupExternalServerEdit": {
            "layersError": "Error retrieving external layers", 
            "metadata": "Medatadata", 
            "name": "Name", 
            "noLayers": "No external layers found", 
            "proxyUrl": "Proxy URL", 
            "title": "Title", 
            "url": "URL"
        }, 
        "popupExternalServerList": {
            "add": "Add external server", 
            "deleteServer": "Delete external server?", 
            "deleteServerError": "Error deleting external server", 
            "edit": "Edit external server", 
            "error": "Error retrieving external servers", 
            "noServer": "No external servers available", 
            "title": "External server list"
        }, 
        "popupFeatureInfo": {
            "clickToEdit": "Hacer clic para editar", 
            "featureId": "Id Objecto", 
            "hasAttachments": "Ficheros adjuntos", 
            "layerName": "Nombre de capa", 
            "pr": "PR", 
            "roadSections": "Road information", 
            "sectionName": "Section:"
        }, 
        "popupFeaturesRoadSegment": {
            "PR": "PR", 
            "PREnd": "PR", 
            "abscissa": "Abscissa", 
            "contains": "Contains", 
            "containsTitle": "Feature contains buffer", 
            "distance": "Distance", 
            "distanceTitle": "Search radius around the road", 
            "end": "End", 
            "filterType": "Filter type", 
            "intersects": "Intersects", 
            "intersectsTitle": "At least one common point or contains", 
            "road": "Road", 
            "start": "Start", 
            "title": "Features near road", 
            "within": "Within", 
            "withinTitle": "Buffer contains feature"
        }, 
        "popupGenerateAttachmentLink": {
            "title": "Copiar el link adjunto"
        }, 
        "popupGenerateLink": {
            "link": "Link:", 
            "title": "Copiar link"
        }, 
        "popupGeosign": {
            "confirmDelete": "Are you sure you want to delete the geosign?", 
            "newGeosign": "New geosign", 
            "noData": "No geosigns", 
            "title": "Geosigns"
        }, 
        "popupGlobalTimeline": {
            "title": "Timeline global"
        }, 
        "popupHelp": {
            "title": "Ayuda"
        }, 
        "popupImageSwitcher": {
            "title": "Imágenes de frente"
        }, 
        "popupImajnet": {
            "title": "<span id=\"imajnetImageTitle\" class=\"left\">Imagen Imajnet- </span>"
        }, 
        "popupImajnetLRSSettings": {
            "title": "Imajnet LRS ajustes"
        }, 
        "popupImajnetLoginErrorMessage": {
            "title": "Error al connectar"
        }, 
        "popupImajnetSettings": {
            "title": "Imajnet ajustes"
        }, 
        "popupInfo": {
            "listing": "Listing", 
            "table": "Table", 
            "title": "Info"
        }, 
        "popupInfoEditFeature": {
            "child": "Children", 
            "edit": "Edit", 
            "links": "Links", 
            "noLinksData": "This object has no parents or children", 
            "parent": "Parents", 
            "thisObject": "This object", 
            "title": "Editar los datos"
        }, 
        "popupInsertGPSPosition": {
            "getGPSCoordinates": "Use GPS position", 
            "noPGSPosition": "No GPS position", 
            "notSupported": "Geolocation is not supported by this browser.", 
            "title": "Create point", 
            "wrongCoordinates": "Invalid coordinates"
        }, 
        "popupInsertLRSLine": {
            "firstPoint": "First point", 
            "getGPSCoordinates": "Use GPS position", 
            "noPGSPosition": "No GPS position", 
            "notSupported": "Geolocation is not supported by this browser.", 
            "secondPoint": "Second point", 
            "selectOnMap": "Select on map", 
            "title": "Create line", 
            "wrongCoordinates": "Invalid coordinates"
        }, 
        "popupLayerAlignmentSettings": {
            "confirm": "Are you sure?", 
            "layer": "Layer", 
            "layerAttributes": "Layer attributes ID field", 
            "referenceLayer": "Reference layer", 
            "referenceLayerAttributes": "Reference layer ID field", 
            "saveButton": "Generate", 
            "title": "Layer alignment settings"
        }, 
        "popupMeasure": {
            "LRS": "LRS", 
            "lastSegment": "Mesure du dernier segment", 
            "road": "Road", 
            "simple": "Simple", 
            "text": "Mesure cumulée", 
            "title": "Medida"
        }, 
        "popupMeasureSurface": {
            "textSurface": "Surface", 
            "title": "Medida"
        }, 
        "popupNews": {
            "title": "News"
        }, 
        "popupOfflineMode": {
            "title": "Cache layers"
        }, 
        "popupPhotogrammetryClipboard": {
            "title": "Portapapeles"
        }, 
        "popupPhotogrammetryClipboardExport": {
            "title": "Exportar"
        }, 
        "popupPrint": {
            "confidentialWathermark": "Confidential", 
            "error": "Error al imprimir", 
            "errorPageFormat": "Page format not supported", 
            "errorPrintCapabilities": "Cannot read print capabilities", 
            "legend": "Legend", 
            "noLayersToPrint": "No hay capas que imprimir", 
            "title": "Imprimir"
        }, 
        "popupReloadGeoserver": {
            "title": "Geoserver actualización"
        }, 
        "popupReservePicture": {
            "cancelButton": "Cancel", 
            "saveButton": "Save", 
            "title": "Draw on image"
        }, 
        "popupResetGeoserver": {
            "title": "Geoserver reinicio"
        }, 
        "popupRoadSchematic": {
            "downloadAttachmentButton": "Download attachment", 
            "errorExport": "Error exporting road schematic!", 
            "errorNoGeometry": "Selected object do not have a valid geometry!", 
            "exportButton": "Export", 
            "step": "Step", 
            "title": "RoadSchematic"
        }, 
        "popupRoadSchematicExport": {
            "addAsAttachment": "Add as attachment", 
            "exportRoadSchematics": "Export", 
            "fullRoad": "Full road", 
            "headerHeight": "Header height", 
            "previewPage": "añadir visión general", 
            "rowHeaderWidth": "Row header width", 
            "rowHeight": "Row height", 
            "template": "Template", 
            "title": "Road schematic export", 
            "visibleRegion": "Visible region"
        }, 
        "popupRoadSchematicSettings": {
            "algorithm": "Algorithm", 
            "clearButton": "Clear", 
            "confirm": "Are you sure?", 
            "deflectorOptions": "Deflector options", 
            "diagLayer": "Diag layer", 
            "diagLayerAttributes": "Diagnostics layer attributes", 
            "diagLayerOptions": "Diagnostics options", 
            "fields": "Fields", 
            "layers": "Layers", 
            "layersOptions": "Layers options", 
            "lrmsOptions": "LRMS options", 
            "lrmsScale": "Scale", 
            "radarOptions": "Radar options", 
            "roadAttributes": "Attributes", 
            "roadsLayer": "Roads layer", 
            "saveButton": "Generate", 
            "title": "Road schematic settings", 
            "uniboxOptions": "Unibox options"
        }, 
        "popupSaveWFST": {
            "title": "Save offline data"
        }, 
        "popupSearch": {
            "GeographicConstraintDrawCoordinatesTitle": "Point", 
            "GeographicConstraintDrawGeometryTitle": "Draw geometry", 
            "GeographicConstraintSelectAreaTitle": "Select area", 
            "GeographicConstraintTitle": "Geographic constraint", 
            "LRSConstraintTitle": "LRS constraint", 
            "allAttributes": "Todos los atributos", 
            "allLayers": "Todas las capas", 
            "attachmentName": "Name", 
            "attachments": "Search attachments", 
            "attachmentsListing": {
                "buttonDelete": "Delete selected attachments", 
                "buttonDownload": "Download", 
                "deleteConfirm": "Are you sure you want to delete selected attachments?", 
                "deleteError": "Some of the attachments could not be deleted", 
                "deleteSuccess": "Attachments deleted", 
                "downloadProgress": "Download attachments in progress", 
                "downloadTitle": "Download attachments"
            }, 
            "button": "Search", 
            "description": "Descripción", 
            "distancePreviousSearchFeatures": "Distance", 
            "errorNoAttachments": "No fichero adjunto encontrado", 
            "errorNoAttributes": "No objetos encontrados", 
            "feature": "Datos", 
            "image": "Imagen", 
            "layer": "Layer", 
            "name": "Nombre", 
            "newFromExistingButton": "New search from result", 
            "objects": "Search objects", 
            "titleCrossLayerFilter": "Cross layer filter", 
            "titlepopupNewSearchFromExisting": "New search from existing", 
            "titlepopupSearch": "Buscar", 
            "titlesearchAttachments": "Search attachments", 
            "titlesearchAttributes": "Search attributes", 
            "titlesearchComments": "Search comments", 
            "x": "X", 
            "y": "Y"
        }, 
        "popupSearchAttachments": {
            "title": "Search thorugh attachments"
        }, 
        "popupSearchComments": {
            "title": "Search thorugh comments"
        }, 
        "popupSearchReserve": {
            "title": "Reserve"
        }, 
        "popupStyleEditor": {
            "title": "Estilo de edición"
        }, 
        "popupStyleEditorNewImage": {
            "title": "Nueva imagen"
        }, 
        "popupStyleEditorNewStyleName": {
            "title": "Nuevo nombre de estilo "
        }, 
        "popupViewAttachmentImage": {
            "cancel": "Cerrar", 
            "errorDownload": "Impossible descargar", 
            "save": "Descargar", 
            "title": "Imagen adjunta"
        }, 
        "popupViewAttachmentPdf": {
            "cancel": "Cerrar", 
            "errorDownload": "Impossible descargar", 
            "save": "Descargar", 
            "title": "pdf adjunto"
        }, 
        "searchAddressPopup": {
            "title": "Buscar dirección"
        }, 
        "searchLRSContainer": {
            "title": "Buscar LRS"
        }, 
        "statisticsReport": {
            "attribute": "Attribute", 
            "chartAsPercentage": "Chart as percentage", 
            "chartTitle": "Chart Title", 
            "error": "Unable to generate statistics report", 
            "mapSubtitle": "Report Subtitle", 
            "mapTitle": "Report Title", 
            "report": "Report", 
            "selectLabel": "Statistics", 
            "sumMode": {
                "count": "Count", 
                "geometryDimension": "Geometry Dimension", 
                "label": "Sum Mode"
            }, 
            "title": "Statistics report", 
            "wathermarkText": "Watermark Text", 
            "zoomTo": {
                "filter": "Filter", 
                "label": "Zoom To", 
                "objects": "Objects"
            }
        }, 
        "surf": "Surface", 
        "thematicGroupsContainer": {
            "title": "Layers management"
        }, 
        "wpsSearch": {
            "Average": "Average", 
            "Count": "Count", 
            "Max": "Max", 
            "Median": "Median", 
            "Min": "Min", 
            "StandardDeviation": "Standard Deviation", 
            "Sum": "Sum", 
            "attribute": "Attribute", 
            "error": "Error getting statistcs.", 
            "execute": "Compute", 
            "noFeatures": "No features selected", 
            "title": "Statistics simple", 
            "titlewpsSearch": "Layer statistics"
        }
    }, 
    "notifications": {
        "deleteConfirm": "Are you sure you want to delete?", 
        "errorAddNewColumn": "Press disk icon to save new row before continue!", 
        "featuresLRSError": "Not all features has LRS", 
        "infoSaveOfflineData": "Save or cancel offline changed data", 
        "noLRS": "No LRS", 
        "thematicGroupsNotAvailableOnline": "Thematic groups not available.", 
        "thematicGroupsNotAvailableTitle": "Load Thematic groups"
    }, 
    "popupEditLayerAttributes": {
        "title": "Edit layer attributes"
    }, 
    "popupRecomputeLayerData": {
        "layerName": "Layer: ", 
        "mode": {
            "RecomputeGeometryUsingAbsoluteLRS": "Recompute geometry using absolute LRS", 
            "RecomputeGeometryUsingRelativeLRS": "Recompute geometry using relative LRS", 
            "RecomputeLRSUsingGeometry": "Recompute LRS using geometry", 
            "label": "Mode"
        }, 
        "saveButton": "Ok", 
        "title": "Recompute layer data"
    }, 
    "popupSettings": {
        "LRSReferenced": "LRS referenced", 
        "activateWFSDefault": "Advanced options by default", 
        "addNewStyle": "Añadir nuevo estilo", 
        "baseLayer": "Capa inicial", 
        "copyStyle": "Copy style", 
        "defaultStyle": "Defecto", 
        "errorModifySettings": "imposible cambiar ajustes", 
        "internal": "Interno", 
        "layerStyle": "Estilo", 
        "layerTitle": "Título", 
        "noStyleDefined": "No estilo definido", 
        "opacity": "Opacidad", 
        "project": {
            "ground": "Proyección al suelo", 
            "height": "Altura offset", 
            "meters": "metros", 
            "project": "Proyección en la imagen", 
            "title": "Proyección", 
            "update": "Actualizar"
        }, 
        "searchable": "Buscable", 
        "timeline": {
            "enable": "Activar timeline", 
            "field": "Campo", 
            "granularity": {
                "month": "Mes", 
                "title": "Granularidad", 
                "year": "Año"
            }, 
            "notAvailable": "Timeline no disponible", 
            "period": "Selecccionar período", 
            "title": "Timeline", 
            "year": "Selecccionar año"
        }, 
        "title": "Settings"
    }, 
    "preference": {
        "description": "Descripción", 
        "id": "Id", 
        "logToDatabase": "Acceder a la base de datos", 
        "saveError": "Error al guardar las preferencias", 
        "saveSuccess": "Preferencias guardadas", 
        "sendEmail": "Eviar email", 
        "title": "Ajustes eventos", 
        "type": "Tipo"
    }, 
    "recalculateExtentLoading": "The object that you have just created is located outside of the layer extent, the platform will recompute the layer extent in order to properly display your object. Pease be patient.", 
    "records": "Record(s)", 
    "roadSchematic": {
        "addToSessionsButton": "Add to schematic", 
        "chart": {
            "cancel": "Cancel", 
            "edit": "Edit", 
            "save": "Save"
        }, 
        "customLayer": {
            "addLayer": "Add layer", 
            "deleteLayer": "Delete layer", 
            "hideLayers": "Hide layers", 
            "showLayers": "Show layers"
        }, 
        "deleteSession": "Are you sure you want to delete this session?", 
        "deleteTooltip": "Delete session", 
        "diag": {
            "STRUCTURE": "STR", 
            "SURFACE": "SUR", 
            "config": "Config", 
            "hideDiag": "Hide Diag", 
            "layer": "Layer", 
            "note_chaussie": "ROAD_NOTE", 
            "showDiag": "Show Diag", 
            "title": "Diag"
        }, 
        "errorSaving": "Error saving road schematic", 
        "fields": {
            "deflectorFields": {
                "CC-AXE": "CC_AXE", 
                "CC-RIVE": "CC_RIVE", 
                "DMX-AXE": "DMX_AXE", 
                "DMX-RIVE": "DMX_RIVE", 
                "RCC-AXE": "RCC_AXE", 
                "RCC-RIVE": "RCC_RIVE", 
                "SC-AXE": "SC_AXE", 
                "SC-RIVE": "SC_RIVE", 
                "title": "Deflector fields"
            }, 
            "lrmsFields": {
                "affCh": "affCh", 
                "affRive": "affRive", 
                "amplADef": "amplADef", 
                "amplDefT": "amplDefT", 
                "amplDepl": "amplDepl", 
                "devMoyCo": "devMoyCo", 
                "devers": "Devers", 
                "hautEau": "hautEau", 
                "idxADef": "idxADef", 
                "idxBomb": "idxBomb", 
                "idxDefT": "idxDefT", 
                "idxDepl": "idxDepl", 
                "idxOrn": "idxOrn", 
                "ornCara": "ornCara", 
                "profOrnD": "profOrnD", 
                "profOrnG": "profOrnG", 
                "title": "LRMS fields"
            }, 
            "radarFields": {
                "crossing": "Crossing", 
                "title": "Radar fields", 
                "z1": "Z", 
                "z2": "Z 2", 
                "z3": "Z 2", 
                "z4": "Z 4", 
                "z5": "Z 5", 
                "z6": "Z 6", 
                "z7": "Z 7", 
                "zh": "Z 8"
            }, 
            "uniboxFields": {
                "IRI": "IRI", 
                "NGO": "NGO", 
                "NMO": "NMO", 
                "NPO": "NPO", 
                "bar": "bar", 
                "line": "line", 
                "linkedPoints": "linkedPoints", 
                "points": "points", 
                "title": "Unibox fields"
            }
        }, 
        "getRoadSchematicButton": "Set schematic geometry", 
        "inverseSession": "Are you sure you want to inverse this session?", 
        "inverseTooltip": "Inverse session", 
        "name": "Road schematic", 
        "title": "Road schematic"
    }, 
    "saveData": {
        "LRSGeometry": "Do you want to update feature geometry?", 
        "confirmTitle": "Do you want to save changes?", 
        "edit": "Edit objects", 
        "editFeature": "Edit objects", 
        "editFeatureFromGrid": "Edit objects", 
        "editLRSSchematic": "Edite objects", 
        "layerMetadata": "Layer metadata", 
        "layerMetadataValues": "Layer metadata values", 
        "layerSettings": "Layer settings", 
        "manageUsers": "Manage users", 
        "newRow": "Do you want to save new feature data", 
        "styleEditor": "Style", 
        "thematicGroup": "Thematic group", 
        "title": "You have unsaved data!"
    }, 
    "success": {
        "featuresSaved": "Features saved successfully", 
        "noFeaturesToSave": "No features to save"
    }, 
    "the_geom": "Geometry", 
    "thematicGroup": {
        "activateWFS": "opciones avanzadas", 
        "applyToChildren": "Apply thematic group to child workspaces", 
        "applyToChildrenSucces": "Thematic group applied to child workspaces", 
        "baseGroup": "Inicial", 
        "boundingBox": "Cuadro delimitador", 
        "createMiniGroupTitle": "Nuevo grupo", 
        "deleteAllLayerFeatures": "Delete all features", 
        "deleteFolderConfirm": "Are you sure you want to delete this folder", 
        "deleteGeoserverLayerAllFeaturesConfirm": "Are you sure you want to delete all layer features", 
        "deleteGeoserverLayerAllFeaturesSuccess": "Layer features were deleted", 
        "deleteGeoserverLayerConfirm": "¿Está seguro de que desea eliminar esta capa?", 
        "deleteGeoserverLayerSuccess": "La capa ha sido suprimida", 
        "deleteGroupConfirm": "¿Está seguro de que desea eliminar este grupo?", 
        "deleteNodeFromTree": "Suprimir", 
        "dragNodeHere": "Arrastre capas aquí", 
        "editLayer": "Editar capa", 
        "errorBaseLayerMissing": "Por favor, elija al menos una capa", 
        "errorDeletingGeoserverLayer": "Error al suprimir la capa Geoserver", 
        "errorDeletingGeoserverLayerAllFeatures": "Error deleting layer features", 
        "errorGettingGeoserverLayers": "Error getting geoserver layers. Reload page?", 
        "errorZoom": "El valor debe estar comprendido entre: ", 
        "errorZoomSmall": "El Zoom Inicial tiene que ser mas pequeño que el Zoom Max", 
        "groupDeleted": "Grupo suprimido", 
        "layerInformation": "Layer information", 
        "newFromExisting": " (Copiar)", 
        "newGroupTitle": "Nuevo grupo", 
        "popupLayerInformation": {
            "MultiLineString": "Line", 
            "MultiSurface": "Polygon", 
            "Point": "Point", 
            "error": "Error retrieving layer infromation", 
            "layerSize": "Layer size", 
            "layerType": "Layer type", 
            "numberOfObjects": "Number of objects", 
            "title": "Layer information"
        }, 
        "privateGroup": "Privado", 
        "saveError": "Imposible gaurdar Grupos temáticos", 
        "saveSuccess": "Grupos temáticos guardados", 
        "styleNotAvailable": "No estilo disponible", 
        "title": "Título", 
        "visibility": "Visibility", 
        "workspace": "Workspace", 
        "zoomInitial": "Zoom inicial", 
        "zoomMax": "Zoom max", 
        "zoomToExtent": "Zoom en la capa"
    }, 
    "units": {
        "meters": "meters"
    }, 
    "user": {
        "afterEditOwnUser": "A logout-login from the application is required. Do you wish to do that now?", 
        "email": "Email", 
        "enabled": "Activado", 
        "errorDelete": "Error deleting user", 
        "errorPermissions": "Introduzca su nombre de usuario y contraseña", 
        "errorUsernamePassword": "Nombre de usuario y/o contraseña invalidos", 
        "firstName": "Apellido", 
        "imajnetSubscriptionType": "Subscription type", 
        "lastName": "Nombre", 
        "mustLoginMessage": "Por favor,  login para acceder a esta página", 
        "noRole": "Pas d'accès", 
        "password": "Contraseña", 
        "passwordCannotBeEmpty": "Contraseña no puede estar vacío", 
        "passwordConfirm": "Confirmar contraseña", 
        "passwordConfirmNotMatch": "Por favor, confirmar la misma contraseña", 
        "roles": "Perfil", 
        "userSaved": "Usuario guardado", 
        "username": "Nombre de usuario", 
        "workspaces": "Workspaces:"
    }, 
    "userEntity": "Usuario", 
    "users": "Usuarios", 
    "viewDocument": "Ver documento", 
    "viewFeature": "View feature", 
    "viewLink": "Ver el link", 
    "workspaces": {
        "PROJECT": "Project", 
        "REGION": "Region", 
        "REGION_GROUP": "Region group", 
        "ROOT": "Root", 
        "afterDeleteMessage": "You will be logged out!", 
        "afterDeleteTitle": "Project deleted", 
        "afterSaveMessage": "In order to access the workspace that you have just created, a logout-login from the application is required. Do you wish to do that now?", 
        "caption": "Workspaces", 
        "description": "Description", 
        "errorName": "Please enter workspace name", 
        "generateRegionsPopup": {
            "afterSaveMessage": "In order to access the regions that you have just created, a logout-login from the application is required. Do you wish to do that now?", 
            "confirm": "Are you sure that you wish to generate regions? \n * If the selected workspace already contains regions with the same names as the ones in the file, the ones from the file will be ignored!", 
            "erorGettingsLayers": "Error getting layers", 
            "errorGeneratingRegions": "Unable to create regions", 
            "errorLayerAttributeMissing": "Attribute NOM_REG is missing", 
            "errorLayerNotPolygon": "Selected layer geometry is not (multi)polygon", 
            "selectRegionsLayer": "Select regions layer", 
            "selectRootWorkspace": "Select root workspace", 
            "selectedLayerInfo": "Layer must contain (multi)polygons and must have a NOM_REG attribute!", 
            "title": "Manage regions"
        }, 
        "generateRegionsResponsePopup": {
            "content": "No of created regions", 
            "title": "Create regions result"
        }, 
        "name": "Workspace name", 
        "nameTitle": "No special characters", 
        "saved": "Workspace saved", 
        "select": "Select workspace", 
        "selectError": "Please select a workspace", 
        "selectTitle": "Workspace", 
        "title": "Title", 
        "type": "Type"
    }, 
    "zoomToFeature": "Zoom hacia el objecto"
};
})(jQuery);
