<?php
/**
 * DESCRIPTION
 *
 * @package PACKAGE
 * @author AUTHOR_NAME <AUTHOR_EMAIL>
 * @license GPL-3.0+
 * @link https://github.com/manovotny/REPOSITORY
 * @copyright COPYRIGHT
 *
 * @wordpress-plugin
 * Plugin Name: NAME
 * Plugin URI: https://github.com/manovotny/REPOSITORY
 * Description: DESCRIPTION
 * Version: 0.0.0
 * Author: AUTHOR_NAME
 * Author URI: AUTHOR_URL
 * License: GPL-3.0+
 * License URI: http://www.gnu.org/licenses/gpl-3.0.html
 * GitHub Plugin URI: https://github.com/manovotny/REPOSITORY
 */

/* Access
---------------------------------------------------------------------------------- */

if ( ! defined( 'WPINC' ) ) {

    die;

}


/* Support
---------------------------------------------------------------------------------- */

wp_enqueue_script( 'TODO' );

/* Libraries
---------------------------------------------------------------------------------- */

require_once __DIR__ . '/lib/TODO/TODO.php';

/* Classes
---------------------------------------------------------------------------------- */

if ( ! class_exists( 'TODO' ) ) {

    require_once __DIR__ . '/classes/class-wp-todo.php';

}

/* Widgets
---------------------------------------------------------------------------------- */

if ( ! class_exists( 'TODO' ) ) {

    require_once __DIR__ . '/classes/widgets/class-wp-todo-widget.php';

    add_action( 'widgets_init', create_function( '', 'register_widget("WP_TODO_Widget");' ) );

}

/* Admin
---------------------------------------------------------------------------------- */

require_once __DIR__ . '/admin/TODO.php';

/* Includes
---------------------------------------------------------------------------------- */

require_once __DIR__ . '/inc/TODO.php';