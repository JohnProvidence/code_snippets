<?php
// Custom Post Type Template for Wordpress

function your_custom_post_type() { // rename function to reflect name of your post type

	$labels = array( // change array values to reflect custom post type
		'name'			=> 'Post Type Name',
		'singular_name'	=> 'Post Type Name Singular',
		'add_new'		=> 'Add New',
		'add_new_item'	=> 'Add New Item',
		'edit_item'		=> 'Edit Item',
		'new_item'		=> 'New Item',
		'all_items'		=> 'All Items',
		'view_item'		=> 'View Item',
		'search_items'		=> 'Search Items',
		'not_round'		=> 'Item Not Found',
		'not_found_in_trash'	=> 'Item Not Found In Trash',
		'parent_item_colon'	=> '', 
		'menu_name'		=> 'Post Type Name'
		);


	$supports = array( 
		// list of Wordpress functions that appear in post type editing page - add or remove functions as needed
		'title',
		'editor',
		'thumbnail',
		'custom-fields',
		'page-attributes'
		);

	$args = array(
		'labels'			=> $lables,
		'description'		=> 'A description of your custom post type.',
		'public'			=> true,
		'menu_position' 	=> 3,
		'supports'		=> $supports,
		'has_archive'		=> false
		);

	register_post_type('post_type_slug', $args); // post_type_slug can not contain spaces or capital letters
}

add_action('init', 'your_custom_post_type'); // use the name of your_custom_post_type function

?>