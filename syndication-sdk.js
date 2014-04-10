function Syndication(url){
	/* ========== PRIVATE VARIABLES ========== */
	var _dataUrl;
	url !== undefined ? _dataUrl = url : _dataUrl = "http://ctacdev.com:8090/Syndication/api/v2";
	
	var pagination;
	var apiCall = function( urlString, funcCallback, paramsObj){//console.log(urlString);

		$.ajax({
		    url: urlString,
		    type: "GET",
		    data: paramsObj,
		    dataType: 'jsonp',
		    success: function(data){
				if(data.meta !== undefined){
					pagination = data.meta.pagination;	
				}
				
				funcCallback(data);				
		    },
		    error: function(xhr, status, error){
		    	console.log('=======> e' + xhr.status);
		    	$('#results').html('<span>'+xhr.status+' error!</span>');
		    }
		});	

	}

	return {
		/* ========== METHOD LIST START ========== */
		addPagination : function(){
			return pagination;
		},

		/**/
		getCampaigns: function(callback, options){
			var params;
			options === undefined ? params = {} : params = $.param(options);

			apiCall(_dataUrl + '/resources/campaigns.json?callback=?', function(data){
				callback(data.results);
			}, params);
		},

		/**/
		getCampaignsById: function(id, callback){
			apiCall(_dataUrl + '/resources/campaigns/'+ id.toString() +'.json?callback=?', function(data){
				callback(data.results);	
			});
		},

		/**/
		getLanguages: function(callback, options){
			var params;
			options === undefined ? params = {} : params = $.param(options);

			apiCall(_dataUrl + '/resources/languages.json?callback=?', function(data){
				callback(data.results);
			}, params);
		},

		/**/
		getLanguageById: function(id, callback){
			apiCall(_dataUrl + '/resources/languages/'+ id.toString() +'.json?callback=?', function(data){
				callback(data.results);
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
			
			var results = apiCall(_dataUrl + '/resources/media.json?callback=?', function(data){
				callback(data.results);
			}, params);

		},

		/*GET API {id}/alternateImages.json CALL*/
		getMediaAlternateImagesById: function(id, callback){
			apiCall(_dataUrl + '/resources/media/'+id.toString()+'.json?callback=?', function(data){
				callback(data.results[0].alternateImages);
			});
		},

		/**/
		getMediaByCampaignId: function(id, callback, options){
			var params;
			options === undefined ? params = {} : params = $.param(options);

			apiCall(_dataUrl + '/resources/campaigns/'+ id.toString() +'/media.json?callback=?', function(data){
				callback(data.results);	
			}, params );
		},

		/*GET API media/{id}.json CALL*/
		getMediaById: function(id, callback){
			apiCall(_dataUrl + '/resources/media/'+id.toString()+'.json?callback=?', function(data){
				callback(data.results);
			});
		},

		/**/
		getMediaByTagId:function(id, callback, options){
			var params;
			options === undefined ? params = {} : params = $.param(options);

			apiCall(_dataUrl + '/resources/tags/'+ id.toString() +'/media.json?callback=?', function(data){
				callback(data.results);
			}, params);
		},

		/*GET API media/{id}/content CALL*/
		getMediaContentById: function(id, callback){
			apiCall(_dataUrl + '/resources/media/'+id.toString()+'/content?callback=?', function(data){
				callback(data.content);
			});
		},

		/**/
		getMediaEmbedById: function(id, callback, options){
			var params;
			options === undefined ? params = {} : params = $.param(options);			
			
			apiCall(_dataUrl + '/resources/media/'+id.toString()+'/embed.json?callback=?', function(data){
				callback(data.results);
			},params);			
		},

		/**/
		getMediaHtmlById : function(id, callback, options) {
			var params;
			options === undefined ? params = {} : params = $.param(options);

			var results = apiCall(_dataUrl + '/resources/media/'+id.toString()+'/syndicate.json?callback=?', function(data){
				callback(data.results);
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
			apiCall(_dataUrl + '/resources/media/'+ id.toString() +'/ratings.json?callback=?', function(data){
				callback(data.results);
			});
		},
		
		/**/
		getMediaSearchResults: function(searchfield, callback){
			apiCall(_dataUrl + '/resources/media/searchResults.json?q=' + searchfield + '&callback=?', function(data){
				callback(data.results);
			});
		},

		/**/
		getMediaThumbnailById: function(id){
			return _dataUrl + '/resources/media/'+ id.toString() +'/thumbnail.jpg';
		},

		/**/
		getMediaTypes: function(callback){
			apiCall(_dataUrl + '/resources/mediaTypes.json?callback=?', function(data){
				callback(data.results);
			});
		},		

		getMediaYoutubeMetaDataById: function(id, callback){
			apiCall(_dataUrl + '/resources/media/'+ id.toString() +'/youtubeMetaData.json?callback=?',function(data){
				callback(data.results);
			});
		},

		/**/
		getMostPopularMedia: function(callback, options){
			var params;
			options === undefined ? params = {} : params = $.param(options);

			apiCall(_dataUrl + '/resources/media/mostPopularMedia.json?callback=?', function(data){
				callback(data.results);
			}, params);
		},

		/* HELPER FUNCTION */
		getPage: function(url, callback) {
			
			apiCall(url, function(data) {
				callback(data.results);
			});

		},

		getRelatedMediaById: function(id, callback, options){
			var params;
			options === undefined ? params = {} : params = $.param(options);

			apiCall(_dataUrl + '/resources/media/'+ id.toString() +'/relatedMedia.json?callback=?', function(data){
				callback(data.results);
			}, params);
		},

		/**/
		getRelatedTagsById: function(id, callback, options){
			var params;
			options === undefined ? params = {} : params = $.param(options);

			apiCall(_dataUrl + '/resources/tags/'+ id.toString() +'/related.json?callback=?', function(data){
				callback(data.results);
			}, params);
		},

		getResources: function(string, callback){
		 	apiCall(_dataUrl + "/resources.json?q=" + string +"&callback=?", function(data){
		 		callback(data.results);
		 	}); 
		},

		/**/
		getSources: function(callback, options){
			var params;
			options === undefined ? params = {} : params = $.param(options);

			apiCall(_dataUrl + '/resources/sources.json?callback=?', function(data){
				callback(data.results);
			}, params);
		},

		/**/
		getSourcesById: function(id, callback){
			apiCall(_dataUrl + '/resources/sources/'+ id.toString() +'.json?callback=?', function(data){
				callback(data.results);
			});
		},

		/**/
		getTags: function(callback, options){
			var params;
			options === undefined ? params = {} : params = $.param(options);

			apiCall(_dataUrl + '/resources/tags.json?callback=?', function(data){
				callback(data.results);
			}, params);
		},				

		/**/
		getTagById: function(id, callback){
			apiCall(_dataUrl + '/resources/tags/'+ id.toString() +'.json?callback=?', function(data){
				callback(data.results);
			});
		},

		/**/
		getTagTypes: function(callback){
			apiCall(_dataUrl + '/resources/tagTypes.json?callback=?', function(data){
				callback(data.results);
			})
		}
		/* ========== METHOD LIST END ========== */
	}	
}
