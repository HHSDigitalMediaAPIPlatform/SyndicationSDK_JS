function Syndication(url) {
    'use strict';
    /* ========== PRIVATE VARIABLES ========== */
    var dataUrl,
    pagination;
    url !== undefined ? dataUrl = url : dataUrl = "http://ctacdev.com:8090/Syndication/api/v2";

    var apiCall = function( urlString, funcCallback, paramsObj){
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
		/* HELPER FUNCTION */
		addPagination : function(){
			return pagination;
		},

		getCampaigns: function(callback, options){
			var params;
			options === undefined ? params = {} : params = $.param(options);

			apiCall(dataUrl + '/resources/campaigns.json?callback=?', function(data){
				callback(data.results);
			}, params);
		},

		getCampaignsById: function(id, callback){
			apiCall(dataUrl + '/resources/campaigns/'+ id.toString() +'.json?callback=?', function(data){
				callback(data.results);	
			});
		},

		getLanguages: function(callback, options){
			var params;
			options === undefined ? params = {} : params = $.param(options);

			apiCall(dataUrl + '/resources/languages.json?callback=?', function(data){
				callback(data.results);
			}, params);
		},

		getLanguageById: function(id, callback){
			apiCall(dataUrl + '/resources/languages/'+ id.toString() +'.json?callback=?', function(data){
				callback(data.results);
			});
		},
 
		getMedia : function(callback, options) {
			var params;
			options === undefined ? params = {} : params = $.param(options);
			
			var results = apiCall(dataUrl + '/resources/media.json?callback=?', function(data){
				callback(data.results);
			}, params);

		},

		getMediaAlternateImagesById: function(id, callback){
			apiCall(dataUrl + '/resources/media/'+id.toString()+'.json?callback=?', function(data){
				var alternateImages = data.results[0].alternateImages;
				if(alternateImages.length === 0){
					callback(data.results[0].alternateImages);
					return
				}
				apiCall(dataUrl + '/resources/media/'+id.toString()+'.json?callback=?', function(data){
					callback(data.results[0].thumbnailUrl);
				});
			});
		},

		getMediaByCampaignId: function(id, callback, options){
			var params;
			options === undefined ? params = {} : params = $.param(options);

			apiCall(dataUrl + '/resources/campaigns/'+ id.toString() +'/media.json?callback=?', function(data){
				callback(data.results);	
			}, params );
		},

		getMediaById: function(id, callback){
			apiCall(dataUrl + '/resources/media/'+id.toString()+'.json?callback=?', function(data){
				callback(data.results);
			});
		},

		getMediaByTagId:function(id, callback, options){
			var params;
			options === undefined ? params = {} : params = $.param(options);

			apiCall(dataUrl + '/resources/tags/'+ id.toString() +'/media.json?callback=?', function(data){
				callback(data.results);
			}, params);
		},

		getMediaContentById: function(id, callback){
			apiCall(dataUrl + '/resources/media/'+id.toString()+'/content?callback=?', function(data){
				callback(data.content);
			});
		},

		getMediaEmbedById: function(id, callback, options){
			var params;
			options === undefined ? params = {} : params = $.param(options);			
			
			apiCall(dataUrl + '/resources/media/'+id.toString()+'/embed.json?callback=?', function(data){
				callback(data.results);
			},params);			
		},

		getMediaHtmlById : function(id, callback, options) {
			var params;
			options === undefined ? params = {} : params = $.param(options);

			var results = apiCall(dataUrl + '/resources/media/'+id.toString()+'/syndicate.json?callback=?', function(data){
				callback(data.results);
			}, params);
		},

		getMediaPreviewById : function(id, options) {
			var params;
			options === undefined ? params = {} : params = $.param(options);
			
			return dataUrl + '/resources/media/' + id.toString() + '/preview.jpg?' + params;                                                                                                                                                                   
		},

		getMediaRatingById: function(id, callback){
			apiCall(dataUrl + '/resources/media/'+ id.toString() +'/ratings.json?callback=?', function(data){
				callback(data.results);
			});
		},
		
		getMediaSearchResults: function(searchfield, callback){
			apiCall(dataUrl + '/resources/media/searchResults.json?q=' + searchfield + '&callback=?', function(data){
				callback(data.results);
			});
		},

		getMediaThumbnailById: function(id){
			return dataUrl + '/resources/media/'+ id.toString() +'/thumbnail.jpg';
		},

		getMediaTypes: function(callback){
			apiCall(dataUrl + '/resources/mediaTypes.json?callback=?', function(data){
				callback(data.results);
			});
		},		

		getMediaYoutubeMetaDataById: function(id, callback){
			apiCall(dataUrl + '/resources/media/'+ id.toString() +'/youtubeMetaData.json?callback=?',function(data){
				callback(data.results);
			});
		},

		getMostPopularMedia: function(callback, options){
			var params;
			options === undefined ? params = {} : params = $.param(options);

			apiCall(dataUrl + '/resources/media/mostPopularMedia.json?callback=?', function(data){
				callback(data.results);
			}, params);
		},

		/* HELPER FUNCTION */
		getPage: function(url, callback) {
			var str = url;
			str = str.substring(0, str.lastIndexOf('jsonp'));
			apiCall(str + '?', function(data) {
				callback(data.results);
			});

		},

		getRelatedMediaById: function(id, callback, options){
			var params;
			options === undefined ? params = {} : params = $.param(options);

			apiCall(dataUrl + '/resources/media/'+ id.toString() +'/relatedMedia.json?callback=?', function(data){
				callback(data.results);
			}, params);
		},

		/**/
		getRelatedTagsById: function(id, callback, options){
			var params;
			options === undefined ? params = {} : params = $.param(options);

			apiCall(dataUrl + '/resources/tags/'+ id.toString() +'/related.json?callback=?', function(data){
				callback(data.results);
			}, params);
		},

		getResources: function(string, callback){
		 	apiCall(dataUrl + "/resources.json?q=" + string +"&callback=?", function(data){
		 		callback(data.results);
		 	}); 
		},

		/**/
		getSources: function(callback, options){
			var params;
			options === undefined ? params = {} : params = $.param(options);

			apiCall(dataUrl + '/resources/sources.json?callback=?', function(data){
				callback(data.results);
			}, params);
		},

		/**/
		getSourcesById: function(id, callback){
			apiCall(dataUrl + '/resources/sources/'+ id.toString() +'.json?callback=?', function(data){
				callback(data.results);
			});
		},

		/**/
		getTags: function(callback, options){
			var params;
			options === undefined ? params = {} : params = $.param(options);

			apiCall(dataUrl + '/resources/tags.json?callback=?', function(data){
				callback(data.results);
			}, params);
		},				

		/**/
		getTagById: function(id, callback){
			apiCall(dataUrl + '/resources/tags/'+ id.toString() +'.json?callback=?', function(data){
				callback(data.results);
			});
		},

		/**/
		getTagTypes: function(callback){
			apiCall(dataUrl + '/resources/tagTypes.json?callback=?', function(data){
				callback(data.results);
			})
		}
		/* ========== METHOD LIST END ========== */
	}	
}