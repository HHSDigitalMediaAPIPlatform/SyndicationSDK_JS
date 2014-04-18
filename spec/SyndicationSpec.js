describe('Syndiation SDK test.', function(){

	var imgTest;
	var pagination;
	var so;

	beforeEach(function(){
		so = new Syndication();
	});

	/* ================== CAMPAIGNS ================== */
	it('Return all campaigns.', function(done){
		so.getCampaigns(function(data){
			expect(data.length).toBeGreaterThan(0);
			done();
		},{
			max: 5,
			offset: 5
		});
	});

	it('Return campaign by id.', function(done){
		so.getCampaignsById(1, function(data){
			expect(data.length).toBeGreaterThan(0);
			done();
		});
	});

	it('Returns campaign media items by campaign id.', function(done){
		so.getMediaByCampaignId(1, function(data){
			expect(data.length).toBeGreaterThan(0);
			done();
		},{
			max: 2,
			offset: 1
		});
	});

	/* ================== LANGUAGES ================== */
	it('Return list of languages.', function(done){
		so.getLanguages(function(data){
			expect(data.length).toBeGreaterThan(0);
			done();
		},{
			offset: 1,
			max: 1
    	});
	});

	it('Returns language by id.', function(done){
		so.getLanguageById(2, function(data){
			expect(data.length).toBeGreaterThan(0);
			done();
		});
	});

	/* ================== MEDIA ================== */
	it('Returns all video media items.', function(done){
		so.getMedia(function(data){
			expect(data.length).toBeGreaterThan(0);
			done();		
		},{ 
			offset: 5,
			max: 5,
			mediaTypes: 'video'

		});
	});

	it('Returns most popular media items.', function(done){
		so.getMostPopularMedia(function(data){
			expect(data.length).toBeGreaterThan(0);
			done();				
		},{
			max: 5,
			offset: 5
		});
	});

	it('Returns users search query.', function(done){
		so.getMediaSearchResults('heart', function(data){
			expect(data.length).toBeGreaterThan(0);
			done();				
		});
	});

	it('Returns Media items by id.', function(done){
		so.getMediaById(36, function(data){
			expect(data.length).toBeGreaterThan(0);
			done();				
		});
	});

	it('Returns media content by id.', function(done){
		so.getMediaContentById(2, function(data){
			expect(data.length).toBeGreaterThan(0);
			done();				
		});
	});

	it('Returns the javascript or iframe embed code for the MediaItem identified by "id".', function(done){
		so.getMediaEmbedById(1, function(data){
			expect(data.length).toBeGreaterThan(0);
			done();					
		});
	});

	it('Returns the JPG preview, where applicable, for the MediaItem identified by the "id".', function(){
		var myImg = so.getMediaPreviewById(1,{
			imageFloat: 'left',
			height: 111,
			width: 150,
			previewSize: 'custom'
		});

		$('#testImg').attr('src', myImg);
		afterEach(function(){
			$('#testImg').attr('src', "");
		});
	});

	it('Returns the list of MediaItems related to the MediaItem identified by the "id".', function(done){
		so.getRelatedMediaById(1,function(data){
			expect(data.length).toBeGreaterThan(0);
			done();				
		});		
	});

	it('Returns the syndicated content for a given MediaItem in the specified "format" (HTML or JSON).', function(done){
		so.getMediaHtmlById(1,function(data){
			expect(data.length).toBeGreaterThan(0);
			done();	
		});
	});

	it('Returns the JPG thumbnail, where applicable, for the MediaItem identified by the "id".', function(){
		var myImg = so.getMediaThumbnailById(32);
		$('#testImg').attr('src', myImg);
		afterEach(function(){
			$('#testImg').remove();
		});		
	});

	it('Returns the Youtube metadata, where applicable, for the MediaItem identified by the "id".', function(done){
		so.getMediaYoutubeMetaDataById(75, function(data){
			expect(data.length).toBeGreaterThan(0);
			done();				
		});
	});


	/* ================== MEDIATYPES ================== */
	it('Returns the list of available MediaTypes.', function(done){
		so.getMediaTypes(function(data){
			expect(data.length).toBeGreaterThan(0);
			done();
		});
	});

	/* ================== RESOURCES ================== */
	it('Returns the list of Resources matching the search query "q".', function(done){
		so.getResources('tobacco', function(data){
			expect(data.length).toBeGreaterThan(0);
			done();
		});
	});

	/* ================== SOURCES ================== */
	it('Returns list of media sources.', function(done){
		so.getSources(function(data){
			expect(data.length).toBeGreaterThan(0);
			done();
		},{
			offset: 2,
			max: 2
		});
	});

	it('Returns media source by id.', function(done){
		so.getSourcesById(5, function(data){
			expect(data.length).toBeGreaterThan(0);
			done();
		});
	});

	/* ================== TAGS ================== */

	it('Returns the list of TagTypes', function(done){
		so.getTagTypes(function(data){
			expect(data.length).toBeGreaterThan(0);
			done();
		});
	});

	it('Returns the list of Tags matching the specified query parameters in the specified "format".', function(done){
		so.getTags(function(data){
			expect(data.length).toBeGreaterThan(0);
			done();	
		});
		
	});

	it('Returns the Tag identified by the "id" in the specified "format".', function(done){
		so.getTagById(1, function(data){
			expect(data.length).toBeGreaterThan(0);
			done();	
		});
	});

	it('Returns the list of MediaItems associated with the Tag identified by the "id".', function(done){
		so.getMediaByTagId(1, function(data){
			expect(data.length).toBeGreaterThan(0);
			done();
		});
	});

	it('Returns the list of Tags related to the Tag identified by the "id" in the specified format.', function(done){
		so.getRelatedTagsById(1, function(data){
			expect(data.length).toBeGreaterThan(0);
			done();
		});		
	});

	/* ================== HELPER FUNCTIONS ================== */			

	it('Looks for and returns alternate images or thumbnail if no alt images are found.', function(done){
		so.getMediaAlternateImagesById(1, function(data){
			expect(data.length).toBeGreaterThan(0);
			done();				
		});
	});

	it('Adds pagination', function(done){

		so.getMostPopularMedia(function(data){			
			pagination = so.addPagination();
			expect(pagination).toBeDefined();
			done();					
		},{
			max: 10,
			offset: 0
		});
	});

	it('Makes call to nextUrl based off of pagination using getPage method.', function(done){
		var next = pagination.nextUrl;
		
		so.getPage(next, function(data){
			expect(data.length).toBeGreaterThan(0);
			done();
		});
	});
});