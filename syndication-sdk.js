var Syndication = (function(){ 
	
	var _dataUrl = "http://ctacdev.com:8090/Syndication/api/v2";
	var _thisObj = this; // Variable to map the 'Syndication' objects 'this'.
	
	/* Methods Paramers Objects */
	/* Objects used for methods */
	var getMediaParams = {
		max: 18,
		offset: 0
	};

	var getMediaEmbedParams = {
		name: 'Syndicated Content'
	}

	var getMediaPreviewParams = {

	}

	var maxRecords = 18;
	var pagination;

	apiCall = function( urlString, funcCallback, paramsObj) {
		$.getJSON(urlString, paramsObj, function(data){
			//console.log(data);
			if(data.meta !== undefined){
				pagination = data.meta.pagination;	
			}
			
			funcCallback(data);
		});
	}

	return {

		addPagination : function(){
			return pagination;
		},

		/*
			max 						: int
			offset						: int
			sourceUrlContains			: string
			order						: string
			mediaType 					: string
			name 						: string
			nameContains 				: string
			descriptionContains			: string
			sourceUrl 					: string
			sourceUrlContains			: string
			dateContentAuthored			: string
			contentAuthoredSinceDate 	: string
			contentAuthoredBeforeDate	: string
			contentAuthoredInRange		: string
			dateContentUpdated			: string
			contentUpdatedSinceDate,
			contentUpdatedBeforeDate,
			contentUpdatededInRange,
			dateContentPublished,
			contentPublishedSinceDate,
			contentPublishedBeforeDate,
			contentPublishedInRange,
			dateContentReviewed,
			contentReviewedSinceDate,
			contentReviewedBeforeDate,
			contentReviewedInRange,
			dateSyndicationCaptured,
			syndicationCapturedSinceDate,
			syndicationCapturedBeforeDate,
			syndicationCapturedInRange,
			dateSyndicationUpdated,
			syndicationUpdatedSinceDate,
			syndicationUpdatedBeforeDate,
			syndicationUpdatedInRange,
			dateSyndicationVisible,
			syndicationVisibleSinceDate,
			syndicationVisibleBeforeDate,
			syndicationVisibleInRange,
			languageId,
			languageName,
			languageValue,
			hash,
			hashContains,
			sourceId,
			sourceName,
			sourceNameContains,
			sourceAcronym,
			sourceAcronymContains,
			tagIds,
			restrictToSet
		*/

		/*GET API media.json CALL*/ 
		// Was 'getAllMediaTypes' no is 'getMedia'
		getMedia : function(callback, options) {

	        var getMediaOptions = $.extend( {}, getMediaParams, options );

			
			var results = _thisObj.apiCall(_dataUrl + '/resources/media.json?callback=?', function(data){
				callback(data.results);
			}, getMediaOptions);

		},

		/*GET API {id}/alternateImages.json CALL*/
		getMediaAlternateImagesById: function(id, callback){
			_thisObj.apiCall(_dataUrl + '/resources/media/'+id.toString()+'/alternateImages.json?callback=?', function(data){
				callback(data.results);
			});
		},

		/*GET API media/{id}.json CALL*/
		getMediaById: function(id, callback){
			_thisObj.apiCall(_dataUrl + '/resources/media/'+id.toString()+'.json?callback=?', function(data){
				callback(data.results);
			});
		},

		/*GET API media/{id}/content CALL*/
		getMediaContentById: function(id, callback){
			_thisObj.apiCall(_dataUrl + '/resources/media/'+id.toString()+'/content?callback=?', function(data){
				callback(data);
			});
		},

		/**/
		getMediaEmbedById: function(id, callback, options){

			var getMediaEmbedOptions = $.extend( {}, getMediaEmbedParams, options );
			console.log("====> "+_dataUrl + '/resources/media/'+id.toString()+'/embed.html?callback=?');
			var results = _thisObj.apiCall(_dataUrl + '/resources/media/'+id.toString()+'/embed.html?callback=?', function(data){
				callback(data);
			}, getMediaEmbedOptions);
		},

		/**/
		getMediaHtmlById : function(id, callback, options) {
			var getMediaHtmlOptions = $.extend( {}, options );

			var results = _thisObj.apiCall(_dataUrl + '/resources/media/'+id.toString()+'/syndicate.json?callback=?', function(data){
				callback(data);
			}, getMediaHtmlOptions);
		},

		/*GET API {id}/preview.json CALL*/
		getMediaPreviewById : function(id, options) {
			var getMediaPreviewOptions = $.extend( {}, getMediaPreviewParams, options );
			console.log(getMediaPreviewOptions.imageFloat);
			var append;
			return _dataUrl + '/resources/media/' + id.toString() + '/preview.jpg?'+getMediaPreviewOptions;
			//previewSize=custom&width=570&height=400&crop=true';
		},

		searchMediaMetadata : function(searchfield, callback) {
			if(searchfield.val() === "") {
				searchfield.val('Enter Search Term Here...');
				return 
			};
			var searchField = searchfield.val();
			var syndicatedSearchArray = [];
			var syndicatedSearchIdsArray = [];
			var searchQuery = _thisObj.apiCall(_dataUrl + '/resources.json?q=' + escape(searchField) + '&callback=?', function(data){
				
				syndicatedSearchArray = data.results[0];

				$.each(syndicatedSearchArray, function(index, element){
					
					for(var i = 0, totalItems = element.items.length; totalItems > i; i++  ) {
						syndicatedSearchIdsArray.push(element.items[i].id);
					}

				});

				_thisObj.apiCall(_dataUrl + '/resources/media.json?restrictToSet=' + syndicatedSearchIdsArray.join() + '&callback=?', function(data){
					callback(data.results);
				});

			});
			
		},

		/* HELPER FUNCTION */
		getPage : function(url, callback) {
			
			_thisObj.apiCall(url, function(data) {
				callback(data.results);
			});

		}				

	}
}());