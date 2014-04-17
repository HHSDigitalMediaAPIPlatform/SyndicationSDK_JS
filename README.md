[TOC]

#HHS Media Services JavaScript SDK
This is a JavaScript, jQuery dependent implementation of the HHS Media Server API. This SDK offers JavaScript developer’s familiarity and easy access to HHS Media Services data using AJAX to return the data in a JSON format for implementation into websites or web apps.

#JavaScript SDK

#INTRODUCTION

To use the SDK you'll need to download it from here (_**PLACE HOLDER FOR DOWNLOAD URL**_) and atleast jQuery version 1.7. Once downloaded you can add the script to your project and then create a new **_Syndication_** object from the Syndication constructor.

**Example:**

	var so = new Syndication();
	
This will instaniate the Syndication object for use in your project and give you access to the various methods for obtaining content.

***

#METHODS

##Campaigns: Information about campaigns

_**getCampaigns:**_  Get a list of campaigns based on params.

:Required parameters: 
**none**

:Optional parameters:  
**max**: Integer -  // The maximum number of records to return.  
**offset**: Integer - // The offset of the records set to return for pagination.  
**sort**t: String - // [*](#sorting)Set of fields to sort the records by.

**Sort By**  
id, name, startDate, mediaItems, description, endDate,source, contactEmail

**Exmaple:**

	so.getCampaigns(function(data){
		//Callback data code goes here.
	},{ 
		//Optional parameters go here.
		max: 5,
		offset: 5	
	});

	
getCampaignsById:  Get information about a specific campaign by ID.

:Required parameters:  
**id**: Integer - // The id of the record to look up.

:Optional parameters:  **none**

**Exmaple:**

	so.getCampaignsById(1, function(data){  
		//Callback data code goes here.
	});
	
_**getCampaignsById:**_  Get a list of media items for a specific campaign based on params.

:Required parameters:  
**id**: Integer - // The id of the campaign to find media items for.

:Optional parameters:  
**max**: Integer -  // The maximum number of records to return.  
**offset**: Integer - // The offset of the records set to return for pagination.  
**sort**t: String - // [*](#sorting)The name of the property to which sorting will be applied.

**Sort By**  
id, name, startDate, mediaItems, description, endDate,source, contactEmail

**Exmaple:**

	so.getMediaByCampaignId(1, function(data){  
		//Callback data code goes here.
	},{  
		//Optional parameters go here.
		max: 5,
		offset: 5		
	});
***
##Languages: Information about languages

_**getLanguages**_:  Get a list of languages based on params.

:Required parameters:  **none**

:Optional parameters:  
**max**: Integer - // The maximum number of records to return  
**offset**: Integer - // The offset of the records set to return for pagination  
**sort**t: String - // [*](#sorting)Set of fields to sort the records by.

**Sort By**  
id, name, startDate, isoCode

**Exmaple:**

	so.getMediaByCampaignId(1, function(data){  
		//Callback data code goes here.
	},{  
		//Optional parameters go here.
		max: 5,
		offset: 5		
	});
	
getLanguageById: Get information about a specific language by ID.

:Required parameters:  
**id**: Integer  - // The id of the language to look up.

:Optional parameters: **none**

**Exmaple:**

	so.getLanguageById(2, function(data){
		//Callback data code goes here.
	});		
***
##Media: Information about media

_**getMedia**_:  Get a list of media items based on params.  

:Required parameters:  **none**

:Optional parameters:   
 **max**: Integer - // The maximum number of records to return.  
 **offset**: Integer - // The offset of the records set to return for pagination.  
 **sort**: String - // [*](#sorting)Set of fields to sort the records by.  
 **mediaTypes**: String - // Find all media items belonging to the specified media type[s].  
 **name**: String - // Find all media items containing the provided name, case insensitive.  
 **nameContains**: String - // Find all media items containing the partial name, case insensitive.  
 **descriptionContains**: String - // Find all media items containing the provided partial description, case insensitive.  
 **sourceUrl**: String - // Find all media items which have the provided sourceUrl, case insensitive.  
 **sourceUrlContains**: String - // Find all media items which contain the provided partial sourceUrl, case insensitive.  
 **dateContentAuthored**: String - // Find all media items authored on the provided day (RFC 3339, time ignored).  
 **contentAuthoredSinceDate**: String - // Find all media items authored since the provided day (RFC 3339, time ignored).
 **contentAuthoredBeforeDate**: String - // Find all media items authored before the provided day (RFC 3339, time ignored).  
 **contentAuthoredInRange**: String - // Find all media items authored between the provided start and end days (RFC 3339, comma separated, time ignored).   
 **dateContentUpdated**: String - // Find all media items updated on the provided day (RFC 3339, time ignored).  
 **contentUpdatedSinceDate**: String - // Find all media items updated since the provided day (RFC 3339, time ignored).  
 **contentUpdatedBeforeDate**: String - // Find all media items updated before the provided day (RFC 3339, time ignored).  
 **contentUpdatedInRange**: String - // Find all media items updated between the provided start and end days (RFC 3339, comma separated, time ignored).  
 **dateContentPublished**: String - // Find all media items published on the provided day (RFC 3339, time ignored).  
 **contentPublishedSinceDate**: String - // Find all media items published since the provided day (RFC 3339, time ignored).  
 **contentPublishedBeforeDate**: String - // Find all media items published before the provided day (RFC 3339, time ignored).  
 **contentPublishedInRange**: String - // Find all media items published between the provided start and end days (RFC 3339, comma separated, time ignored).  
 **dateContentReviewed**: String - // Find all media items reviewed on the provided day (RFC 3339, time ignored). 
 **contentReviewedSinceDate**: String - // Find all media items reviewed since the provided day (RFC 3339, time ignored).  
 **contentReviewedBeforeDate**: String - // Find all media items reviewed before the provided day (RFC 3339, time ignored).  
 **contentReviewedInRange**: String - // Find all media items reviewed between the provided start and end days (RFC 3339, comma separated, time ignored).  
 **dateSyndicationCaptured**: String - // Find all media items authored on the provided day (RFC 3339, time ignored).  
 **syndicationCapturedSinceDate**: String - // Find all media items authored since the provided day (RFC 3339, time ignored).  
 **syndicationCapturedBeforeDate**: String - // Find all media items authored before the provided day (RFC 3339, time ignored).  
 **syndicationCapturedInRange**: String - // Find all media items authored between the provided start and end days (RFC 3339, comma separated, time ignored).  
 **dateSyndicationUpdated**: String - // Find all media items updated on the provided day, (RFC 3339, time ignored).  
 **syndicationUpdatedSinceDate**: String - // Find all media items updated since the provided day, (RFC 3339, time ignored).  
 **syndicationUpdatedBeforeDate**: String - // Find all media items updated before the provided day, (RFC 3339, time ignored).  
 **syndicationUpdatedInRange**: String - // Find all media items updated between the provided start and end days, (RFC 3339, comma separated, time ignored).  
 **languageId**: String - // Find all media items written in the language specified by Id.  
 **languageName**: String - // Find all media items written in the language specified by name, case insensitive.  
 **languageIsoCode**: String - // Find all media items written in the language specified by 639-2 isoCode , case insensitive.  
 **hash**: String - // Find all media items which match the provided hash, case insensitive.  
 **hashContains**: String - // Find all media items which match the provided partial hash, case insensitive.  
 **sourceId**: Interger - // Find all media items that belong to the source specified by Id.  
 **sourceName**: String - //  Find all media items that belong to the source specified by name, case insensitive.  
 **sourceNameContains**: String - //  Find all media items that belong to the source specified by partial name, case insensitive.
 **sourceAcronym**: String - //   Find all media items that belong to the source specified by acronym, case insensitive.
 **sourceAcronymContains**: String - // Find all media items that belong to the source specified by partial acronym, case insensitive.  
 **tagIds**: String - // Find only media items tagged with the specified tag Ids.  
 **restrictToSet**: String - // Find only media from within the supplied list of Ids.

**Sort By**  
id, name, sourceUrl, dateSyndicationCaptured, dateSyndicationUpdated, dateSyndicationVisible, language, source, description, dateContentAuthored, dateContentUpdated, dateContentPublished, dateContentReviewed

**Example:**

	so.getMedia(function(data){
			//Callback data code goes here.
		},{
			max: 5,
			offset: 5,
			sort: '-dateContentPublished,-id'
		});
		
_**getMostPopularMedia**_: Get the media with the highest ratings.

:Required parameters:  **none**  

:Optional parameters:  
 **max**: Integer - // The maximum number of records to return.  
 **offset**: Integer - // The offset of the records set to return for pagination. 

**Example:**

		so.getMostPopularMedia(function(data){
			//Callback data code goes here.
		},{
			max: 5,
			offset: 5
		});
		
_**getMediaSearchResults**_:  Search for the supplied text globally across media types and return full data.

:Required parameters:  
**q**: String - // The search query supplied by the user.  

:Optional parameters:  
**max**: Integer - // The maximum number of records to return  
**offset**: Integer - // The offset of the records set to return for pagination  
**sort**t: String - // [*](#sorting)Set of fields to sort the records by.

**Sort By**  
id, name, sourceUrl, dateSyndicationCaptured, dateSyndicationUpdated, dateSyndicationVisible, language, source, description, dateContentAuthored, dateContentUpdated, dateContentPublished, dateContentReviewed

**Example:**

	so.getMediaSearchResults('PASS SEARCH STRING AS A PARAMETER HERE', function(data){
		//Callback data code goes here.		
	});
		
_**getMediaById**_: Get information about a specific media item by ID.

:Required parameters:  
**id**: Integer  - // The id of the record to look up

:Optional parameters:  **none** 

**Example:**

	so.getMediaById(1, function(data){
		//Callback data code goes here.
	});
	
_**getMediaAlternateImagesById**_:  Returns available alternate images and should non exist it returns the thumbnail screen shot.  

:Required parameters:  
**id**: Integer  - // The id of the media to show content for.

:Optional parameters:  **none** 

**Example:**

	so..getMediaAlternateImagesById(1, function(data){
		//Callback data code goes here.
	});

_**getMediaContentById**_: Get the content belonging to a given MediaItem.

:Required parameters:  
**id**: Integer  - // The id of the media to show content for.

:Optional parameters:  **none** 

**Example:**

	so.getMediaContentById(1, function(data){
		//Callback data code goes here.
	});
	
		
_**getMediaEmbedById**_:  Get the javascript or iframe embed code for this media item for embedding.

:Required parameters:  
**id**: Integer - // The id of the media to get embed code for. 

:Optional parameters:  
**flavor**: String - // Currently supports 'iframe', defaults to 'javascript'.  
**width**: Integer - // The width of the generated iframe. 
**height**: Interger - // The height of the generated iframe.  
**iframeName**: String - // The name of the iframe element.  
**excludeJquery**: Boolean - // Should a reference to the JQuery Library be omitted?  
**excludeDiv**: Boolean - // Should the div to insert content into be omitted?  
**divId**: String - // Should the div to insert content into have a specific name?

**Example:**

	so.getMediaEmbedById(1, function(data){
		//Callback data code goes here.
	});
	
_**getMediaPreviewById**_: Get the jpg preview of the content item where applicable. Store it in a variable for later use.

:Required parameters:  
**id**: Integer - // The id of the media to get a preview for.

:Optional parameters:  
**imageFloat**: String - // Accepts valid CSS float options, such as 'left' or 'right'. Will inject a style into the content before rendering.  
**imageMargin**: String - // Accepts 4 CSV values representing pixel sizes of margin similar to CSS. Default format is 'north,east,sout,west' - for example '0,10,10,0' would put a 10 pixel margin on the right and bottom sides of an image. Will inject a style into the content before rendering.  
**previewSize**: String - // Accepts several preset sizes: thumbnail, small, medium, large, custom. The use of custom requires that height and width be provided as well.  
**width**: Integer - // (Requires previewSize=custom) Supply the width of the custom preview.  
**height**:Integer - // (Requires previewSize=custom) Supply the height of the custom preview.  
**crop**:Boolean - // Turn automatic image cropping on/off (off by default when using preset sizes).

**Example:**

	var myImgVariable = so.getMediaPreviewById(1, {
			imageFloat: 'left',
			height: 480,
			width: 650,
			previewSize: 'custom'
	}); 
	
_**getMediaRatingById**_: Get the 'like' count for the specified media item.

:Required parameters:  
**id**: Integer  - // The ID of the media item to 'like'.

:Optional parameters:  **none** 

**Example:**

	so.getMediaRatingById(1, function(data){
		//Callback data code goes here.
	});
	
_**getRelatedMediaById**_: Get the media related to the current media item.

 :Required parameters:  
**id**: Integer  - // The id of the media item to get related media for.

:Optional parameters:  
**max**: Integer - // The maximum number of records to return  
**offset**: Integer - // The offset of the records set to return for pagination  
**sort**: String - // [*](#sorting)Set of fields to sort the records by.

**Sort By**  
id, name, sourceUrl, dateSyndicationCaptured, dateSyndicationUpdated, dateSyndicationVisible, language, source, description, dateContentAuthored, dateContentUpdated, dateContentPublished, dateContentReviewed

**Example:**

	so.getRelatedMediaById(1, function(data){
		//Callback data code goes here.
	},{
		max: 2,
		offset: 1
	});
	
_**getMediaHtmlById**_: Get the content for a given MediaItem . Supports JSON and HTML responses based on request format.

 :Required parameters:  
**id**: Integer  - // The id of the media to show embed code for.

:Optional parameters:  
**cssClass**: String - //  The css class to target for extraction.  
**stripStyles**:  Boolean - // Remove in-line styles from content.  
**stripScripts**: Boolean - // Remove script tags from content.  
**stripImages**: Boolean - // Remove image tags from content.  
**stripBreaks**: Boolean - // Remove break tags from content.  
**stripClasses**: Boolean - // Remove class attributes from content (except 'syndicate').  
**font-size**: Integer - // Set font size (in points) of p, div, and span tags.  
**imageFloat**: String - // Accepts valid CSS float options, such as 'left' or 'right'. Will inject a style into the content before rendering.  
**imageMargin**: String - // Accepts 4 CSV values representing pixel sizes of margin similar to CSS. Default format is 'north,east,south,west' - for example '0,10,10,0' would put a 10 pixel margin on the right and bottom sides of an image. Will inject a style into the content before rendering.  
**autoplay**: Boolean - // If content is a video, the embeded video will auto play when loaded.  
**rel**: Boolean - // If content is a video, related items will be shown at the end of playback. 

**Example:**

	so.getMediaHtmlById(1, function(data){
		//Callback data code goes here.	
	},{
		cssClass: 'syndicate',
		imageFloat: 'left',
		imageMargin: '0,0,0,0'
	});


_**getMediaThumbnailById**_: Get the jpg thumbnail of the content item where applicable. Store returned image in a variable.

:Required parameters:  
**id**: Integer  - // The id of the media to get a thumbnail for.

:Optional parameters:  **none** 

**Example:**

	var thumb = so.getMediaThumbnailById(32);
	
_**getMediaYoutubeMetaDataById**_: Get the Youtube meta-data for a video item.

:Required parameters:  
**id**: Integer  - // The id of the video to show meta data for.

:Optional parameters:  **none** 

**Example:**

	so.getMediaYoutubeMetaDataById(75, function(data){
		//Callback data code goes here.
	});
***
##MediaTypes: Information about media types

_**getMediaTypes**_: Get a list of available media types.  
:Required parameters:  **none**

:Optional parameters:  **none**

**Example:**

	so.getMediaTypes(function(data){
		//Callback data code goes here.
		//Returns available media types.
	});
***
##Resources: Global Search

_**getResources**_: Search for the supplied text globally across resource types.

:Reuired parameters:
**q**: Integer - // The search query supplied by the user

:Optional parameters: **none**

**Example:**

	so.getResources('PASS SEARCH STRING AS A PARAMETER HERE', function(data){
		//Callback data code goes here.
	}); 
***
##Sources: Information about sources.

_**getSources**_: Get a list of sources based on params.
:Required parameters:  **none**

:Optional parameters:  
**max**: Integer - // The maximum number of records to return  
**offset**: Integer - // The offset of the records set to return for pagination  
**sort**: String - // [*](#sorting)Set of fields to sort the records by.

**Sort By**  
id, name, acronyml, websiteUrl, largeLogoUrl, smallLogoUrl, contactEmail

**Example:**

	so.getSources(function(data){
		//Callback data code goes here.
	},{
		offset: 2,
		max: 2
	});
	
_**getSourcesById**_: Get information about a specific source by Id.

:Reuired parameters:
**id**: Integer - // The id of the source to look up

:Optional parameters: **none**

**Example:**

	so.getSourcesById(5, function(data){
		//Callback data code goes here.
	});
***
##Tags: Information about tags

_**getTagTypes**_: Get a list of types.

:Required parameters: **none**

:Optional parameters: **none**

**Example:**

	so.getTagTypes(function(data){
		//callback data code goes here.
	});
	
_**getTags**_: Get a list of tags.

:Required parameters: **none**

:Optional parameters:  
**max**: Integer - // The maximum number of records to return  
**offset**: Integer - // The offset of the records set to return for pagination  
**sort**: String - // [*](#sorting)The name of the property to which sorting will be applied.  
**name**: String - // Return tags[s] matching the supplied name.  
**nameContains**: String - // Return tags which contain the supplied partial name.  
**syndicationId**: Integer - // Return tags associated with the supplied syndication id.  
**typeId**: Integer - // Return tags belonging to the supplied tag type id.  
**typeName**: - // Return tags belonging to the supplied tag type name.  

**Sort By**  
id, name, language, type

**Example:**

	so.getTags(function(data){
		//callback data code goes here.	
	},{
		max: 5,
		offset: 5,
		nameContains: 'health'
	});


_**getTagById**_: Get information about a specific Tag by ID.

:Required parameters:  
**id**: Integer - // The id of the record to look up

:Optional parameters: **none**

**Sort By**  
id, name, language, type

**Example:**

	so.getTagById(1, function(data){
			//callback data code goes here.	
	});
	
_**getMediaByTagId**_: Return the media items associated with this tag.

 :Required parameters:  
**id**: Integer  - // The id of the record to look up.

:Optional parameters:  
**max**: Integer - // The maximum number of records to return  
**offset**: Integer - // The offset of the records set to return for pagination  
**sort**: String - // [*](#sorting)The name of the property to which sorting will be applied

**Sort By**  
id, name, sourceUrl, dateSyndicationCaptured, dateSyndicationUpdated, dateSyndicationVisible, language, source, description, dateContentAuthored, dateContentUpdated, dateContentPublished, dateContentReviewed
 
**Example:**

	so.getMediaByTagId(1, function(data){
		//callback data code goes here.	
	},{
		max: 5,
		offset: 5
	});
	
_**getRelatedTagsById**_: Get information about related tags for a specific Tag.

:Required parameters:  
**id**: Integer - //  The id of the tag to look up.  

:Optional parameters:  
**max**: Integer - // The maximum number of records to return.  
**offset**: Integer - // The offset of the records set to return for pagination.  
**sort**: String - // [*](#sorting)The name of the property to which sorting will be applied.  

**Sort By**  
id, name, language, type

**Example:**

	so.getRelatedTagsById(1, function(data){
			console.log(data.results);
	});
***

##Helper Functions

_**addPagination**_: Returns pagination information as an object. To be added in SDK method callbacks.

:Required parameters: **none**

:Optional parameters:  **none**

:Returned Object:  
**count**: Integer - // Total amount of returned records.  
**currentUrl**: String - // API url call page to current records page.  
**max**: Integer - // The maximum number of records to return.  
**nextUrl**: String - // Url to call the next set of items based of total amount of returned items.  
**offset**: Integer - // The offset amount used for calling records.  
**order**: String - // Order in which records are displayed.  
**pageNum**: Integer - // Current page of records.  
**previousUrl**: - // API call url to previous records page.  
**sort**: String - // How records are sorted.
**total**: Integer - // Total records count.
**totalPages**: Integer - // Total pages based off of record count.

**Example:**

	var nextPage;
	var currentPage;
	var pagination;
	var previousPage;
	
	so.getMedia(function(data){
			//Callback data code goes here.
			var pagination = so.addPagination();
			nextPage = pagination.nextUrl;
			currenPage = pagination.pageNum;
			previousPage = pagination.previousUrl;
	},{
		max: 5,
		offset: 5,
		sort: '-id'
	});
	
_**getPage**_: Makes API call to get specfic page. Can be used in conjunction with returned pagination to get nextUrl and previousUrl.


:Required parameters: 
**url**: String - // Url passed to make API call and return records. 

:Optional parameters:  **none**

**Example:**

	var nextPage;
	var currentPage;
	var pagination;
	var previousPage;
	
	so.getMedia(function(data){
			//Callback data code goes here.
			var pagination = so.addPagination();
			nextPage = pagination.nextUrl;	………
			// Portion of above code 
	
	$('nextPageBtn').click(function(){
		so.getPage(nextPage, function(data){
			//Callback data code goes here.
			console.log(data);
		});
	});

***

##Understanding Sorting

Some methods allow you to pass in a _**sort**_ parameter to sort returned records. The _**sort**_ param supports multi column sorting through the use of commas as delimiters, and a hyphen to denote descending order. i.e calling the _getMedia_ method and passing in a sort parameter of _id_, would return records in ascending order by _**"id"**_. If you made the same method call but instead passed _**"-id"**_ as a parameter you would return your records in descending order. 

**Example:**

_Ascending Order_  

	so.getMedia(function(data){
        	//Callback data code goes here.
       },{
        	mediaTypes: 'video',
        	sort: 'id' // This will return records in ascending order
       });

_Descending Order_

	so.getMedia(function(data){
        	//Callback data code goes here.
       },{
        	mediaTypes: 'video',
        	sort: '-id' // This will return records in descending order
       });
***
##Date Format

Date formats: Date input format is expected to be based on [RFC 3339](http:www.ietf.org/rfc/rfc3339.txt). Time is ignored.

**Example:**

    2013-11-18T18:43:01Z


        
[Back To Top](#markdown-header-hhs-media-services-javascript-sdk) 