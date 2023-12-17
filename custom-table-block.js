/*
Plugin Name: Custom Table Block
Description: Add custom settings to the Table block.
Version: 1.0.2
Author: HyperCoda
Info: Uncomment the lines related to 'B' below, and/or add new 'C', 'D', etc lines to create new toggle switches within the "Table Settings" pannel.
*/

(function () {
    var el = wp.element.createElement;
    var InspectorControls = wp.blockEditor.InspectorControls;
    var PanelBody = wp.components.PanelBody;
    var ToggleControl = wp.components.ToggleControl;

    // Define the class strings as variables
    var classA = 'wp-block-table--a';
    // var classB = 'wp-block-table--b';

    wp.hooks.addFilter(
        'editor.BlockEdit',
        'custom-table-block/add-control',
        function (BlockEdit) {
            return function (props) {
                // Check if the block is a Table block
                if (props.name !== 'core/table') {
                    return el(BlockEdit, props);
                }

                // Extract existing class names or default to an empty string
                var existingClasses = props.attributes.className || '';

                var mobileClassA = props.attributes.mobileClassA || existingClasses.includes(classA);
                // var mobileClassB = props.attributes.mobileClassB || existingClasses.includes(classB);

                var onChangeMobileClassA = function () {
                    const newMobileClassA = !mobileClassA;

                    // Toggle the class within className
                    const updatedClasses = newMobileClassA
                        ? `${existingClasses} ${classA}`
                        : existingClasses.replace(new RegExp(`\\b${classA}\\b`, 'g'), '').trim();

                    props.setAttributes({
                        mobileClassA: newMobileClassA,
                        // mobileClassB: props.attributes.mobileClassB,
                        className: updatedClasses,
                    });
                };

                /*
                var onChangeMobileClassB = function () {
                    const newMobileClassB = !mobileClassB;

                    // Toggle the class within className
                    const updatedClasses = newMobileClassB
                        ? `${existingClasses} ${classB}`
                        : existingClasses.replace(new RegExp(`\\b${classB}\\b`, 'g'), '').trim();

                    props.setAttributes({
                        mobileClassA: props.attributes.mobileClassA,
                        mobileClassB: newMobileClassB,
                        className: updatedClasses,
                    });
                };
                */

                // Move InspectorControls outside the conditional check
                return el(
                    'div',
                    null,
                    el(
                        InspectorControls,
                        null,
                        el(
                            PanelBody,
                            { title: 'Table Settings', initialOpen: true },
                            el(ToggleControl, {
                                label: 'Mobile Class A',
                                checked: mobileClassA,
                                onChange: onChangeMobileClassA,
                            }),
                            /*
                            el(ToggleControl, {
                                label: 'Mobile Class B',
                                checked: mobileClassB,
                                onChange: onChangeMobileClassB,
                            })
                            */
                        )
                    ),
                    el(BlockEdit, props)
                );
            };
        }
    );
})();
