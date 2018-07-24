<?php
require_once('assets/wp_bootstrap_navwalker.php');
register_nav_menus( array(
    'primary' => __( 'Primary Menu', 'TEMPLATENAME' ),
) );
add_theme_support( 'menus' );
function home_page_menu_args( $args ) {
$args['show_home'] = true;
return $args;
}
add_filter( 'wp_page_menu_args', 'home_page_menu_args' );

// Post Thumbnails + crops
add_theme_support( 'post-thumbnails', array( 'post', 'page' ) ); // array for post-thumbnail support on certain post-types.
set_post_thumbnail_size( 128, 128, true );
add_image_size( 'default-thumbnail', 128, 128, true ); // true: hard crop or empty if soft crop
// add_image_size( 'single-post-image', 688, 688, true ); // true: hard crop or empty if soft crop
// add_image_size( 'product', 275, 275, '' ); // true: hard crop or empty if soft crop
// add_image_size( 'contactpersoon', 244, 300, true ); // true: hard crop or empty if soft crop
// add_image_size( 'header', 1600, 460, true ); // true: hard crop or empty if soft crop

//remove inline width and height added to images
add_filter( 'post_thumbnail_html', 'remove_thumbnail_dimensions', 10 );
add_filter( 'image_send_to_editor', 'remove_thumbnail_dimensions', 10 );
// Removes attached image sizes as well
add_filter( 'the_content', 'remove_thumbnail_dimensions', 10 );
function remove_thumbnail_dimensions( $html ) {
		$html = preg_replace( '/(width|height)=\"\d*\"\s/', "", $html );
		return $html;
}

function remove_width_attribute( $html ) {
   $html = preg_replace( '/(width|height)="\d*"\s/', "", $html );
   return $html;
}

function add_image_responsive_class($content) {
   global $post;
   $pattern ="/<img(.*?)class=\"(.*?)\"(.*?)>/i";
   $replacement = '<img$1class="$2 img-responsive"$3>';
   $content = preg_replace($pattern, $replacement, $content);
   return $content;
}
add_filter('the_content', 'add_image_responsive_class');

function cc_mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');

// if( function_exists('acf_add_options_sub_page') )
// {
// 	acf_add_options_page();
//     acf_add_options_sub_page( 'Footer' );
//     acf_add_options_sub_page( 'Side Menu' );
// }
?>
