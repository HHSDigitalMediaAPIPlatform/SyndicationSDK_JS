var Syndication = (function(){ 
	
	var _dataUrl = "http://ctacdev.com:8090/Syndication/api/v2/resources";
	var _thisObj = this; // Variable to map the 'Syndication' objects 'this'.
	
	var mediaSettings = {
		max: 18,
		offset: 0
	};

	var maxRecords = 18;
	var pagination;

	apiCall = function( urlString, funcCallback, paramsObj) {
		$.getJSON(urlString, paramsObj, function(data){
			//console.log(data);
			pagination = data.meta;
			funcCallback(data);
		});
	}

	return {

		addPagination : function(){
			return pagination;
		},

		/*
			max,
			offset,
			sort,
			order,
			mediaType,
			name,
			nameContains,
			descriptionContains,
			sourceUrl,
			sourceUrlContains,
			dateContentAuthored,
			contentAuthoredSinceDate,
			contentAuthoredBeforeDate,
			contentAuthoredInRange,
			dateContentUpdated,
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

		getAllMediaTypes : function(callback, options) {

	        var requestOptions = $.extend( {}, mediaSettings, options );

			
			var results = _thisObj.apiCall(_dataUrl + '/media.json?callback=?', function(data){
				callback(data.results);
			}, requestOptions);

		},

		getPage : function(url, callback) {
			
			_thisObj.apiCall(url, function(data) {
				callback(data.results);
			});

		},

		getMediaMetadataByMediaId : function() {

		},

		getMediaPreviewByMediaId : function(id) {
		return _dataUrl + '/media/' + id.toString() + '/preview.jpg?previewSize=custom&width=570&height=400&crop=true';
		},

		searchMediaMetadata : function(searchfield, callback) {
			if(searchfield.val() === "") {
				searchfield.val('Enter Search Term Here...');
				return 
			};
			var searchField = searchfield.val();
			var syndicatedSearchArray = [];
			var syndicatedSearchIdsArray = [];
			var searchQuery = _thisObj.apiCall(_dataUrl + '.json?q=' + escape(searchField) + '&callback=?', function(data){
				
				syndicatedSearchArray = data.results[0];

				$.each(syndicatedSearchArray, function(index, element){
					
					for(var i = 0, totalItems = element.items.length; totalItems > i; i++  ) {
						syndicatedSearchIdsArray.push(element.items[i].id);
					}

				});

				_thisObj.apiCall(_dataUrl + '/media.json?restrictToSet=' + syndicatedSearchIdsArray.join() + '&callback=?', function(data){
					callback(data.results);
				});

			});
			
		}		

	}
}());