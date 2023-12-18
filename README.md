# WPMS-V3
Work Progress Management System Version 3 

This is  repository to create a totally new front-end for the WPMS system. The majority of functionality will be ported over from V2, but some modules will be changed significantly (eg. steel stock, and multi-signoff). Other modules will be cut-down and redesigned (eg. a single display job list function that accepts a sorted/filtererd dictionary instead of a specific function for each filter/sort option). 

This is primarily a layout change and new UI to make the system easier and more professional, but there will be some significant changes to how the system functions - these include: 

    -Remove focus on the job table being the main way to log production processes. The "multi sign-off" module will be re-written to be the primary way to log a production process against a departmet or CNC. The job table will now exist as a record of sign-off times and staff names. 

    -Each entry in the WIP job list view will be expandable to give a fast overview of completion level and the current position of each component.

    -It will be possible to open PDFs of drawings for each job from the WIP list view. 

    -A "Machine Status" module will be added so that it is possible to see what jobs/components are in each section or individual CNC at any time. 

    -A more powerful "generate to-do list" module will be created that will collate a dictionary of components that are ready for a department, and sort them by dispatch date. 


Requirements will be added, tracked and managed on GitHub as Issues. 