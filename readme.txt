=== Custom Table Block ===
Contributors: hypercoda
Tags: tables, responsive tables, table block, table css class
Requires at least: 5.0
Tested up to: 6.4.2
Stable tag: 1.0.2
Requires PHP: 8.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Set custom classes within a table block without having to manually enter the class name.

== Description ==

Allows the user to set custom classes within a table block without having to manually enter the class name. This is achieved by the plugins ability to add custom Toggle Switches in the Settings Panel when editing a table block. When toggled on, the class is applied to the "Additional CSS Class(es)" input field. This is desirable because the developer can then define what the custom class does to the table (such as making it mobile friendly) via the WordPress theme, and then the end-user (typically a client) can turn this class on or off without having to remember the class name and manually enter it when needed.

## Configuration
* Install the plugin within WordPress.
* Add a table block to a post or page and select the block, then toggle the "Mobile Class A" within the right-sidebar's "Table Settings" panel.
* When "Mobile Class A" is enabled, then a new class titled "wp-block-table--a" will be applied to the table's parent 'figure' element.
* If you need more than one toggle switch, such as 'Mobile Class B', 'Mobile Class C', etc... then you will need to edit the 'custom-table-block.js' and 'custom-table-block.php' files. The ability to have 'Mobile Class B' is already intact but commented out. Simply uncomment the appropriate lines.

## To-Do
* Add the ability to generate new toggle switches via the WordPress Dashboard instead of requiring the user of this plugin to edit the plugin code.

## Possible use cases
* See the 'scripts.js' file and 'styles.scss' file within the 'add-to-theme' directory, found within the plugin directory. You may add this to your theme's JavaScript and CSS/SASS if you'd like. It will give the 'wp-block-table--a' class the ability to make your tables mobile friendly.
    * The JavaScript works by selecting the table, iterating through each th and td element, and using the data from each cell to create new vertically oriented tables that are more legible on smaller screens. 
    * The CSS then works by hiding newly generated tables on large screens by setting them to display: none;, and a CSS media query to set them to display: table; on small screens. It will also hide the original table by using display: none; as well on small screens.
* Or you may completely ignore the 'scripts.js' and 'styles.scss' files and make use of the toggle switches to your liking by writing your own JavaScript and/or CSS within your theme files.

== Screenshots ==

1. This screen shot description corresponds to screenshot-1.(png|jpg|jpeg|gif). Screenshots are stored in the /assets directory.
2. This is the second screen shot

== Changelog ==

= 1.0.2 =
* The enabled or disabled state of the "Mobile Class A" or "Mobile Class B" etc settings were not actually saving. This is fixed.

= 1.0.1 =
* Plugin was targeting all blocks and not just the Table block. This is now fixed.

= 1.0.0 =
* Initial version.