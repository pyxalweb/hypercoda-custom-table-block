<?php
/*
Plugin Name: Custom Table Block
Description: Add custom settings to the Table block.
Version: 1.0.2
Author: HyperCoda
Info: Uncomment the lines related to 'B' below, and/or add new 'C', 'D', etc lines to create new toggle switches within the "Table Settings" pannel.
*/

function custom_table_block_register() {
    register_block_type('core/table', array(
        'attributes' => array(
            'mobileClassA' => array(
                'type' => 'boolean',
                'default' => false,
            ),
            /*
            'mobileClassB' => array(
                'type' => 'boolean',
                'default' => false,
            ),
            */
        ),
        'render_callback' => 'custom_table_block_render',
    ));
}

function custom_table_block_render($attributes, $content) {
    $classA = $attributes['mobileClassA'] ? 'wp-block-table--a' : '';
    // $classB = $attributes['mobileClassB'] ? 'wp-block-table--b' : '';

    // Uncomment this and comment the other below it if using multiple classes:
    // $combinedClasses = implode(' ', array_filter([$classA, $classB]));
    $combinedClasses = implode(' ', array_filter([$classA]));

    return sprintf('<figure class="%s">%s</figure>', esc_attr($combinedClasses), esc_html($content));
}

function custom_table_block_enqueue_scripts($hook) {
    if ($hook === 'post.php' || $hook === 'post-new.php') {
        global $post;

        if ($post && has_blocks($post->post_content)) {
            $blocks = parse_blocks($post->post_content);

            foreach ($blocks as $block) {
                if ($block['blockName'] === 'core/table') {
                    wp_enqueue_script(
                        'custom-table-block-script',
                        plugin_dir_url(__FILE__) . 'custom-table-block.js',
                        array('wp-blocks', 'wp-element', 'wp-components', 'wp-editor'),
                        null,
                        true
                    );
                    break;
                }
            }
        }
    }
}

add_action('init', 'custom_table_block_register');
add_action('admin_enqueue_scripts', 'custom_table_block_enqueue_scripts');
?>
