document.addEventListener('DOMContentLoaded', function() {
    const isIndexPage = window.location.pathname.includes('index.html');
    
    const projects = [
        {
            id: 1,
            name: "Randhurst Macys",
            contractor: "Blue Moon",
            foreman: "Joseph Doe", 
            startDate: "2024-01-01",
            endDate: "2024-01-31",
            amount: "$1,240.23",
            status: "Completed"
        },
        {
            id: 2,
            name: "Oakbrook Mall Renovation",
            contractor: "Steel Works Inc",
            foreman: "Mike Smith",
            startDate: "2024-02-01", 
            endDate: "2024-03-15",
            amount: "$2,450.80",
            status: "In Progress"
        },
        {
            id: 3,
            name: "Woodfield Food Court",
            contractor: "Construction Pro",
            foreman: "Sarah Johnson",
            startDate: "2024-02-15",
            endDate: "2024-04-01",
            amount: "$3,780.45",
            status: "Planning"
        },
        {
            id: 4,
            name: "Fox Valley Mall Upgrade",
            contractor: "Build Right",
            foreman: "Tom Wilson",
            startDate: "2024-03-01",
            endDate: "2024-05-15",
            amount: "$1,890.67",
            status: "In Progress"
        },
        {
            id: 5,
            name: "Gurnee Mills Remodel",
            contractor: "Elite Builders",
            foreman: "James Brown",
            startDate: "2024-03-15",
            endDate: "2024-04-30",
            amount: "$2,340.90",
            status: "Planning"
        },
        {
            id: 6,
            name: "Northbrook Court Store",
            contractor: "Master Build",
            foreman: "David Lee",
            startDate: "2024-04-01",
            endDate: "2024-05-31",
            amount: "$4,560.34",
            status: "Pending"
        },
        {
            id: 7,
            name: "Orland Square Expansion",
            contractor: "Blue Moon",
            foreman: "Robert Taylor",
            startDate: "2024-04-15",
            endDate: "2024-06-15",
            amount: "$3,210.56",
            status: "Planning"
        },
        {
            id: 8,
            name: "Stratford Square Update",
            contractor: "Steel Works Inc",
            foreman: "Patricia Moore",
            startDate: "2024-05-01",
            endDate: "2024-06-30",
            amount: "$2,870.12",
            status: "Pending"
        },
        {
            id: 9,
            name: "River Oaks Center",
            contractor: "Construction Pro",
            foreman: "Kevin Anderson",
            startDate: "2024-05-15",
            endDate: "2024-07-15",
            amount: "$5,430.89",
            status: "Planning"
        },
        {
            id: 10,
            name: "Chicago Premium Outlets",
            contractor: "Build Right",
            foreman: "Lisa Martinez",
            startDate: "2024-06-01",
            endDate: "2024-08-15",
            amount: "$3,960.78",
            status: "Pending"
        },
        
    ];

    // Define base columns that are common to both pages
    const baseColumns = [
        {
            // Checkbox column
            data: null,
            className: 'w-1 px-4 py-2 text-left border-r text-sm font-medium border-neutral-200 dark:border-neutral-600',
            render: function() {
                return `
                    <div class="flex justify-center items-center">
                        <label class="flex items-center cursor-pointer relative">
                            <input type="checkbox" class="row-checkbox peer h-4 w-4 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 dark:border-neutral-500 checked:bg-slate-800 dark:checked:bg-neutral-200 checked:border-slate-800 dark:checked:border-neutral-200" />
                            <span class="absolute text-white dark:text-neutral-900 opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </span>
                        </label>
                    </div>
                `;
            }
        },
        { 
            data: 'name',
            className: 'px-4 py-2 text-left border-r text-sm font-normal border-neutral-200 dark:border-neutral-600'
        },
        { 
            data: 'contractor',
            className: 'px-4 py-2 text-left border-r text-sm font-normal border-neutral-200 dark:border-neutral-600'
        },
        { 
            data: 'endDate',
            className: 'px-4 py-2 text-left border-r text-sm font-normal border-neutral-200 dark:border-neutral-600'
        },
        {
            data: 'status',
            className: 'w-1 px-4 py-2 text-left text-sm font-normal border-r border-neutral-200 dark:border-neutral-600',
            render: function(data) {
                let colorClass;
                switch(data.toLowerCase()) {
                    case 'completed':
                        colorClass = 'green';
                        break;
                    case 'in progress':
                        colorClass = 'orange';
                        break;
                    case 'delayed':
                        colorClass = 'red';
                        break;
                    case 'planning':
                    case 'on hold':
                    case 'pending':
                        colorClass = 'neutral';
                        break;
                    default:
                        colorClass = 'neutral';
                }
        
                const bgClass = colorClass === 'neutral' 
                    ? 'bg-neutral-100 dark:bg-neutral-700'
                    : `bg-${colorClass}-50 dark:bg-opacity-10 dark:bg-${colorClass}-400`;
                
                const textClass = colorClass === 'neutral'
                    ? 'text-neutral-600 dark:text-neutral-400'
                    : `text-${colorClass}-600 dark:text-${colorClass}-400`;
        
                return `
                    <span class="inline-flex items-center rounded-md gap-2 ${bgClass} px-2 py-1 text-sm font-medium ${textClass}">
                        <svg width="8" height="8" class="mr-1 ${textClass}" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" />
                        </svg>
                        ${data}
                    </span>
                `;
            }
        },
        {
            // Actions column
            data: null,
            className: 'w-1 p-2 text-left text-sm font-normal',
            render: function() {
                return `
                    <div class="relative">
                        <button class="focus:outline-none hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded-md p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" class="text-current" fill="none">
                                <path d="M11.9922 12H12.0012" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17.992 12H18.001" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5.99981 12H6.00879" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                `;
            }
        }
    ];

    // Additional columns for the projects page
    const projectPageColumns = [
        { 
            data: 'foreman',
            className: 'px-4 py-2 text-left border-r text-sm font-normal border-neutral-200 dark:border-neutral-600'
        },
        { 
            data: 'startDate',
            className: 'px-4 py-2 text-left border-r text-sm font-normal border-neutral-200 dark:border-neutral-600'
        },
        { 
            data: 'amount',
            className: 'px-4 py-2 text-left border-r text-sm font-normal border-neutral-200 dark:border-neutral-600'
        }
    ];

    // Use different columns based on page type
    const columns = isIndexPage ? baseColumns : [
        ...baseColumns.slice(0, 3),  // Checkbox, name, contractor
        projectPageColumns[0],       // foreman
        projectPageColumns[1],       // startDate
        baseColumns[3],             // endDate
        projectPageColumns[2],       // amount
        ...baseColumns.slice(4)      // status and actions
    ];

    $('#projectsTable').DataTable({
        data: isIndexPage ? projects.slice(0, 5) : projects,
        columns: columns,
        
        // Only modify these specific options for index page
        paging: !isIndexPage,
        info: !isIndexPage,
        searching: !isIndexPage,
        lengthChange: !isIndexPage,
        // Keep the existing dom setting for employee page, simplify for index
        dom: isIndexPage ? 't' : '<"overflow-x-auto"t><"flex items-center justify-between p-4 border-t border-neutral-200 dark:border-neutral-700"<"hidden md:flex text-sm font-normal text-neutral-500 dark:text-neutral-400"i><"flex items-center gap-2"p><"custom-length-menu-container">>',
        language: {
            search: "",
            searchPlaceholder: "Search...",
            lengthMenu: "_MENU_ / page",
            info: "Page _PAGE_ of _PAGES_",
            paginate: {
                first: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" class="text-current" fill="none"><path d="M15 6L9 12.0001L15 18" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="16" stroke-linecap="round" stroke-linejoin="round" /></svg>',
                last: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" class="text-current" fill="none"><path d="M9.00005 6L15 12L9 18" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="16" stroke-linecap="round" stroke-linejoin="round" /></svg>',
                next: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" class="text-current" fill="none">
                    <path d="M9.00005 6L15 12L9 18" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="16" stroke-linecap="round" stroke-linejoin="round" />
                </svg>`,
                previous: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" class="text-current" fill="none">
                    <path d="M15 6L9 12.0001L15 18" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="16" stroke-linecap="round" stroke-linejoin="round" />
                </svg>`
            }
        },
        pagingType: "numbers",
        pageLength: 12,
        lengthMenu: [12, 24, 36, 48],
        
        order: [[1, 'asc']],

        headerCallback: function(thead, data, start, end, display) {
            $(thead).find('th').eq(0).html(`
                <div class="flex justify-center items-center">
                    <label class="flex items-center cursor-pointer relative">
                        <input type="checkbox" class="select-all-checkbox peer h-4 w-4 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 dark:border-neutral-500 checked:bg-slate-800 dark:checked:bg-neutral-200 checked:border-slate-800 dark:checked:border-neutral-200">
                            <span class="absolute text-white dark:text-neutral-900 opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </span>
                    </label>
                </div>
            `);
        },

        drawCallback: function(settings) {
            const api = this.api();
            const pageInfo = api.page.info();

            if (pageInfo.pages > 1) {
                let html = `
                    <div class="flex items-center gap-2">
                        <button class="previous">${settings.oLanguage.oPaginate.previous}</button>
                        <div class="flex gap-1">`;

                // First page
                html += createPageButton(1, pageInfo.page === 0);

                // Ellipsis or second page
                if (pageInfo.page > 2) {
                    html += createEllipsis();
                } else if (pageInfo.pages > 1) {
                    html += createPageButton(2, pageInfo.page === 1);
                }

                // Pages around current
                for (let i = Math.max(2, pageInfo.page - 1); i <= Math.min(pageInfo.pages - 1, pageInfo.page + 1); i++) {
                    html += createPageButton(i + 1, pageInfo.page === i);
                }

                // Ellipsis or second-to-last page
                if (pageInfo.page < pageInfo.pages - 3) {
                    html += createEllipsis();
                } else if (pageInfo.pages > 1) {
                    html += createPageButton(pageInfo.pages - 1, pageInfo.page === pageInfo.pages - 2);
                }

                // Last page
                if (pageInfo.pages > 1) {
                    html += createPageButton(pageInfo.pages, pageInfo.page === pageInfo.pages - 1);
                }

                html += `
                        </div>
                        <button class="next">${settings.oLanguage.oPaginate.next}</button>
                    </div>`;

                $(this).find('.dataTables_paginate').html(html);

                // Add click handlers
                $(this).find('.dataTables_paginate button[data-page]').on('click', function() {
                    const page = $(this).data('page');
                    api.page(page - 1).draw('page');
                });
            }

            // Create custom length menu - Modified to prevent duplicates
            const existingMenu = document.querySelector('.custom-length-menu');
            const lengthMenuContainer = document.querySelector('.custom-length-menu-container');
            
            if (!existingMenu && lengthMenuContainer) {
                const button = document.createElement('button');
                button.className = 'custom-length-menu hidden md:flex gap-1 justify-between items-center p-2 rounded-md text-sm text-neutral-900 bg-white hover:bg-neutral-200 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 focus:outline-none transition-ease-in-out duration-300 shadow-sm';
                button.style.width = '100px';
                button.innerHTML = `
                    <span>${settings._iDisplayLength} / page</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" class="text-current" fill="none">
                        <path d="M5.99977 9.00005L11.9998 15L17.9998 9" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="16" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                `;
                
                button.onclick = function() {
                    const existingDropdown = document.querySelector('.length-menu-dropdown');
                    if (existingDropdown) {
                        existingDropdown.remove();
                        return;
                    }

                    const menu = document.createElement('div');
                    menu.className = 'length-menu-dropdown absolute right-4 mt-2 py-2 w-32 bg-white dark:bg-neutral-800 rounded-md shadow-lg border border-neutral-200 dark:border-neutral-700 z-50';
                    
                    [10, 25, 50, 100].forEach(number => {
                        const option = document.createElement('button');
                        option.className = `w-full px-4 py-2 text-left text-sm hover:bg-neutral-100 dark:hover:bg-neutral-700 ${settings._iDisplayLength === number ? 'text-neutral-900 dark:text-white bg-neutral-50 dark:bg-neutral-700' : 'text-neutral-600 dark:text-neutral-400'}`;
                        option.textContent = `${number} / page`;
                        option.onclick = function() {
                            settings.oInstance.fnSettings()._iDisplayLength = number;
                            settings.oInstance.fnDraw();
                        };
                        menu.appendChild(option);
                    });
                    
                    lengthMenuContainer.appendChild(menu);
                    
                    // Close menu when clicking outside
                    document.addEventListener('click', function closeMenu(e) {
                        if (!menu.contains(e.target) && !button.contains(e.target)) {
                            menu.remove();
                            document.removeEventListener('click', closeMenu);
                        }
                    });
                };
                
                lengthMenuContainer.appendChild(button);
            } else if (existingMenu) {
                // Update the display length text if menu already exists
                const displayText = existingMenu.querySelector('span');
                if (displayText) {
                    displayText.textContent = `${settings._iDisplayLength} / page`;
                }
            }

            // Add checkbox functionality
            const selectAllCheckbox = document.querySelector('.select-all-checkbox');
            const rowCheckboxes = document.querySelectorAll('.row-checkbox');

            if (selectAllCheckbox) {
                selectAllCheckbox.addEventListener('change', function() {
                    rowCheckboxes.forEach(checkbox => {
                        checkbox.checked = this.checked;
                    });
                });
            }

            // Update header checkbox when row checkboxes change
            rowCheckboxes.forEach(checkbox => {
                checkbox.addEventListener('change', function() {
                    const allChecked = [...rowCheckboxes].every(cb => cb.checked);
                    const someChecked = [...rowCheckboxes].some(cb => cb.checked);
                    
                    if (selectAllCheckbox) {
                        selectAllCheckbox.checked = allChecked;
                        // Optional: add indeterminate state
                        selectAllCheckbox.indeterminate = someChecked && !allChecked;
                    }
                });
            });

            // Style pagination buttons
            $('.paginate_button').each(function() {
                $(this).addClass('p-2 rounded-md').css({
                    'display': 'flex',
                    'align-items': 'center',
                    'justify-content': 'center',
                    'min-width': '36px',
                    'min-height': '36px'
                });

                if ($(this).hasClass('current')) {
                    $(this).addClass('bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white')
                        .removeClass('bg-white dark:bg-neutral-800 ');
                } else {
                    $(this).addClass('bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white cursor-pointer');
                }
            });

            // Style pagination container
            $('.dataTables_paginate').addClass('flex items-center gap-2')
                .css({
                    'display': 'flex',
                    'align-items': 'center',
                    'gap': '0.5rem'
                });

            // Style the numbers container
            $('.dataTables_paginate span').addClass('flex gap-1')
                .css({
                    'display': 'flex',
                    'gap': '0.25rem'
                });

            // Style info text
            $('.dataTables_info').addClass('text-sm font-normal opacity-60');

            // Add gap between buttons
            $('.pagination').addClass('flex gap-1');
        },

        createdRow: function(row, data, dataIndex) {
            // Add classes for row styling and equal height cells
            $(row).addClass('text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-700 cursor-pointer');
            
            // Make all cells in the row equal height
            $(row).find('td').addClass('h-full align-middle');
            
            // Wrap cell contents in a div for consistent padding and height
            $(row).find('td').each(function() {
                const content = $(this).html();
                if (!content.includes('div class="')) { // Only wrap if not already wrapped
                    $(this).html(`<div class="h-full flex items-center">${content}</div>`);
                }
            });
        }
    });

    function createPageButton(number, isActive) {
        const buttonClass = isActive 
            ? 'p-2 rounded-md bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white'
            : 'p-2 rounded-md bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white';
        
        return `
            <button class="${buttonClass}" data-page="${number}">
                <span style="width: 20px; height: 20px;" class="flex items-center justify-center">
                    ${number}
                </span>
            </button>
        `;
    }

    function createEllipsis() {
        return `
            <button class="p-2 rounded-md bg-white dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400">
                <span style="width: 20px; height: 20px;" class="flex items-center justify-center">
                    ...
                </span>
            </button>
        `;
    }
});


