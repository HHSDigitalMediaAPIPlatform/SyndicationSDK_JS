var Syndication = (function(){ 
	
	var _dataUrl = "http://ctacdev.com:8090/Syndication/api/v2";
	var _thisObj = this; // Variable to map the 'Syndication' objects 'this'.
	var pagination;

	apiCall = function( urlString, funcCallback, paramsObj){//console.log(urlString);

		$.ajax({
		    url: urlString,
		    type: "GET",
		    data: paramsObj,
		    dataType: 'json',
		    contentType: 'application/json; charset=utf-8',
		    success: function(data){
				//console.log(data);
				if(data.meta !== undefined){
					pagination = data.meta.pagination;	
				}
				
				funcCallback(data);				
		    },
		    error: function(xhr, status, error){
		    	console.log('=======> ' + xhr.responseText);
		    }
		});
/*			$.getJSON(urlString, paramsObj, function(data){
				//console.log(data);
				if(data.meta !== undefined){
					pagination = data.meta.pagination;	
				}
				
				funcCallback(data);
			});		*/	

	}

	return {

		addPagination : function(){
			return pagination;
		},

		/**/
		getCampaigns: function(callback, options){
			var params;
			options === undefined ? params = {} : params = $.param(options);

			_thisObj.apiCall(_dataUrl + '/resources/campaigns.json?callback=?', function(data){
				callback(data);
			}, params);
		},

		/**/
		getCampaignsById: function(id, callback){
			_thisObj.apiCall(_dataUrl + '/resources/campaigns/'+ id.toString() +'.json?callback=?', function(data){
				callback(data);	
			});
		},

		/**/
		getLanguages: function(callback, options){
			var params;
			options === undefined ? params = {} : params = $.param(options);

			_thisObj.apiCall(_dataUrl + '/resources/languages.json?callback=?', function(data){
				callback(data);
			}, params);
		},

		/**/
		getLanguageById: function(id, callback){
			_thisObj.apiCall(_dataUrl + '/resources/languages/'+ id.toString() +'.json?callback=?', function(data){
				callback(data);
			});
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
			var params;
			options === undefined ? params = {} : params = $.param(options);
			
			var results = _thisObj.apiCall(_dataUrl + '/resources/media.json?callback=?', function(data){
				callback(data);
			}, params);

		},

		/*GET API {id}/alternateImages.json CALL*/
		getMediaAlternateImagesById: function(id, callback){
			_thisObj.apiCall(_dataUrl + '/resources/media/'+id.toString()+'/alternateImages.json?callback=?', function(data){
				callback(data);
			});
		},

		/**/
		getMediaByCampaignId: function(id, callback, options){
			var params;
			options === undefined ? params = {} : params = $.param(options);

			_thisObj.apiCall(_dataUrl + '/resources/campaigns/'+ id.toString() +'/media.json?callback=?', function(data){
				callback(data);	
			}, params );
		},

		/*GET API media/{id}.json CALL*/
		getMediaById: function(id, callback){
			_thisObj.apiCall(_dataUrl + '/resources/media/'+id.toString()+'.json?callback=?', function(data){
				callback(data);
			});
		},

		/**/
		getMediaByTagId:function(id, callback, options){
			var params;
			options === undefined ? params = {} : params = $.param(options);

			_thisObj.apiCall(_dataUrl + '/resources/tags/'+ id.toString() +'/media.json?callback=?', function(data){
				callback(data);
			}, params);
		},

		/*GET API media/{id}/content CALL*/
		getMediaContentById: function(id, callback){
			_thisObj.apiCall(_dataUrl + '/resources/media/'+id.toString()+'/content?callback=?', function(data){
				callback(data);
			});
		},

		/**/
		getMediaEmbedById: function(id, callback, options){
			var params;
			options === undefined ? params = {} : params = $.param(options);			
			
			_thisObj.apiCall(_dataUrl + '/resources/media/'+id.toString()+'/embed.json?callback=?', function(data){
				callback(data);
			},params);			
		},

		/**/
		getMediaHtmlById : function(id, callback, options) {
			var params;
			options === undefined ? params = {} : params = $.param(options);

			var results = _thisObj.apiCall(_dataUrl + '/resources/media/'+id.toString()+'/syndicate.json?callback=?', function(data){
				callback(data);
			}, params);
		},

		/*GET API {id}/preview.json CALL*/
		getMediaPreviewById : function(id, options) {
			var params;
			options === undefined ? params = {} : params = $.param(options);
			
			return _dataUrl + '/resources/media/' + id.toString() + '/preview.jpg?' + params;                                                                                                                                                                   
		},

		/**/
		getMediaRatingById: function(id, callback){
			_thisObj.apiCall(_dataUrl + '/resources/media/'+ id.toString() +'/ratings.json?callback=?', function(data){
				callback(data);
			});
		},
		
		/**/
		getMediaSearchResults: function(searchfield, callback){
			_thisObj.apiCall(_dataUrl + '/resources/media/searchResults.json?q=' + searchfield + '&callback=?', function(data){
				callback(data);
			});
		},

		/**/
		getMediaThumbnailById: function(id){
			return _dataUrl + '/resources/media/'+ id.toString() +'/thumbnail.jpg';
		},

		/**/
		getMediaTypes: function(callback){
			_thisObj.apiCall(_dataUrl + '/resources/mediaTypes.json?callback=?', function(data){
				callback(data);
			});
		},		

		getMediaYoutubeMetaDataById: function(id, callback){
			_thisObj.apiCall(_dataUrl + '/resources/media/'+ id.toString() +'/youtubeMetaData.json?callback=?',function(data){
				callback(data);
			});
		},

		/* HELPER FUNCTION */
		getPage: function(url, callback) {
			
			_thisObj.apiCall(url, function(data) {
				callback(data.results);
			});

		},

		getRelatedMediaById: function(id, callback, options){
			var params;
			options === undefined ? params = {} : params = $.param(options);

			_thisObj.apiCall(_dataUrl + '/resources/media/'+ id.toString() +'/relatedMedia.json?callback=?', function(data){
				callback(data);
			}, params);
		},

		/**/
		getRelatedTagsById: function(id, callback, options){
			var params;
			options === undefined ? params = {} : params = $.param(options);

			_thisObj.apiCall(_dataUrl + '/resources/tags/'+ id.toString() +'/related.json?callback=?', function(data){
				callback(data);
			}, params);
		},

		getResources: function(string, callback){
		 	_thisObj.apiCall(_dataUrl + '/resources.json?q=' + string); 
		},

		/**/
		getSources: function(callback, options){
			var params;
			options === undefined ? params = {} : params = $.param(options);

			_thisObj.apiCall(_dataUrl + '/resources/sources.json?callback=?', function(data){
				callback(data);
			}, params);
		},

		/**/
		getSourcesById: function(id, callback){
			_thisObj.apiCall(_dataUrl + '/resources/sources/'+ id.toString() +'.json?callback=?', function(data){
				callback(data);
			});
		},

		/**/
		getTags: function(callback, options){
			var params;
			options === undefined ? params = {} : params = $.param(options);

			_thisObj.apiCall(_dataUrl + '/resources/tags.json?callback=?', function(data){
				callback(data);
			}, params);
		},				

		/**/
		getTagById: function(id, callback){
			_thisObj.apiCall(_dataUrl + '/resources/tags/'+ id.toString() +'.json?callback=?', function(data){
				callback(data);
			});
		},

		/**/
		getTagTypes: function(callback){
			_thisObj.apiCall(_dataUrl + '/resources/tagTypes.json?callback=?', function(data){
				callback(data);
			})
		},		
	}
}());