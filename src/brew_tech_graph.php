<?php
/* Plugin name: Brew Tech Graph */
// Security check
defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

function brew_tech_graph_scripts() {
global $post;
    if(has_shortcode( $post->post_content, 'brew_tech_graph') ) {
        wp_enqueue_script( 'brew_tech_graph_script', plugins_url() . '/dist/assets/app.js', array(), '1.0.0', true );
    }
}

function displayGraph(){
    echo  '<div id="app">Brew Technolog Graph</div>';
	wp_enqueue_script( 'brew_tech_graph_script' );
}

add_action( 'wp_enqueue_scripts', 'brew_tech_graph_scripts');
add_shortcode('brew_tech_graph', 'displayGraph');

?>
