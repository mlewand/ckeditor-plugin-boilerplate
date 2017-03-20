CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	// %REMOVE_START%
	config.plugins =
		'about,' +
		'a11yhelp,' +
		'basicstyles,' +
		'clipboard,' +
		'elementspath,' +
		'enterkey,' +
		'htmlwriter,' +
		'indentlist,' +
		'link,' +
		'list,' +
		'removeformat,' +
		'resize,' +
		'sourcearea,' +
		'stylescombo,' +
		'toolbar,' +
		'undo,' +
		'wysiwygarea';
	// %REMOVE_END%

	// To add any external plugin just use:
	// CKEDITOR.plugins.addExternal( 'customplugin', '../plugins/customplugin/plugin.js' );
	// config.plugins += ',customplugin';


	CKEDITOR.plugins.addExternal( 'boilerplate', location.href.replace( /\/(?:index\.html)?$/, '' ) + '/../plugin.js' );
	config.plugins += ',boilerplate';
};