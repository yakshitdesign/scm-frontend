document.addEventListener('DOMContentLoaded', function() {
    const employees = [
        {
            id: 1,
            name: {
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                fullName: "Neil Sims",
                email: "neil.sims@mail.com"
            },
            role: "Project Manager",
            availability: "Full Time",
            location: {
                address: "1835 Lexington Avenue, Houston",
                details: "TX 77006, United States"
            },
            amount: "$1,240.23",
            status: "Active"
        },
        {
            id: 2,
            name: {
                image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
                fullName: "Michael Chen",
                email: "michael.chen@mail.com"
            },
            role: "Senior Developer",
            availability: "Part Time",
            location: {
                address: "742 Broadway Street, Seattle",
                details: "WA 98101, United States"
            },
            amount: "$2,350.00",
            status: "Inactive"
        },
        {
            id: 3,
            name: {
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
                fullName: "Emma Wilson",
                email: "emma.w@mail.com"
            },
            role: "UI/UX Designer",
            availability: "Full Time",
            location: {
                address: "563 Park Avenue, New York",
                details: "NY 10022, United States"
            },
            amount: "$1,890.50",
            status: "Active"
        },
        {
            id: 4,
            name: {
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
                fullName: "Sarah Johnson",
                email: "sarah.j@mail.com"
            },
            role: "Frontend Developer",
            availability: "Contract",
            location: {
                address: "892 Valencia Street, San Francisco",
                details: "CA 94110, United States"
            },
            amount: "$1,650.75",
            status: "Active"
        },
        {
            id: 5,
            name: {
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
                fullName: "David Brown",
                email: "david.brown@mail.com"
            },
            role: "Backend Developer",
            availability: "Full Time",
            location: {
                address: "1247 Beacon Street, Boston",
                details: "MA 02446, United States"
            },
            amount: "$2,120.00",
            status: "Active"
        },
        {
            id: 6,
            name: {
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
                fullName: "James Wilson",
                email: "james.w@mail.com"
            },
            role: "DevOps Engineer",
            availability: "Remote",
            location: {
                address: "435 Pine Street, Portland",
                details: "OR 97204, United States"
            },
            amount: "$2,450.30",
            status: "Inactive"
        },
        {
            id: 7,
            name: {
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
                fullName: "Lisa Anderson",
                email: "lisa.a@mail.com"
            },
            role: "Product Manager",
            availability: "Full Time",
            location: {
                address: "678 Michigan Avenue, Chicago",
                details: "IL 60601, United States"
            },
            amount: "$2,800.00",
            status: "Active"
        },
        {
            id: 8,
            name: {
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
                fullName: "Robert Martinez",
                email: "robert.m@mail.com"
            },
            role: "QA Engineer",
            availability: "Contract",
            location: {
                address: "910 Congress Avenue, Austin",
                details: "TX 78701, United States"
            },
            amount: "$1,750.60",
            status: "Active"
        },
        {
            id: 9,
            name: {
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
                fullName: "Emily Davis",
                email: "emily.d@mail.com"
            },
            role: "Data Scientist",
            availability: "Remote",
            location: {
                address: "223 Peachtree Street, Atlanta",
                details: "GA 30303, United States"
            },
            amount: "$2,930.45",
            status: "Inactive"
        },
        {
            id: 10,
            name: {
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
                fullName: "Thomas Wright",
                email: "thomas.w@mail.com"
            },
            role: "Systems Architect",
            availability: "Full Time",
            location: {
                address: "456 Ocean Drive, Miami",
                details: "FL 33139, United States"
            },
            amount: "$3,150.80",
            status: "Active"
        },
        {
            id: 11,
            name: {
                image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
                fullName: "Alex Thompson",
                email: "alex.t@mail.com"
            },
            role: "Mobile Developer",
            availability: "Remote",
            location: {
                address: "789 Market Street, Denver",
                details: "CO 80202, United States"
            },
            amount: "$2,480.90",
            status: "Active"
        },
        {
            id: 12,
            name: {
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                fullName: "Sophie Clark",
                email: "sophie.c@mail.com"
            },
            role: "UI Developer",
            availability: "Part Time",
            location: {
                address: "321 Main Street, Nashville",
                details: "TN 37201, United States"
            },
            amount: "$1,890.75",
            status: "Inactive"
        },
        {
            id: 13,
            name: {
                image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61",
                fullName: "Daniel Lee",
                email: "daniel.l@mail.com"
            },
            role: "Security Engineer",
            availability: "Full Time",
            location: {
                address: "567 Pike Place, Seattle",
                details: "WA 98101, United States"
            },
            amount: "$2,750.60",
            status: "Active"
        },
        {
            id: 14,
            name: {
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
                fullName: "Rachel Green",
                email: "rachel.g@mail.com"
            },
            role: "Cloud Architect",
            availability: "Contract",
            location: {
                address: "890 Bourbon Street, New Orleans",
                details: "LA 70116, United States"
            },
            amount: "$3,200.40",
            status: "Active"
        },
        {
            id: 15,
            name: {
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
                fullName: "Kevin Parker",
                email: "kevin.p@mail.com"
            },
            role: "Full Stack Developer",
            availability: "Remote",
            location: {
                address: "234 South Street, Philadelphia",
                details: "PA 19147, United States"
            },
            amount: "$2,960.30",
            status: "Inactive"
        },
        {
            id: 16,
            name: {
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
                fullName: "Maria Rodriguez",
                email: "maria.r@mail.com"
            },
            role: "Database Administrator",
            availability: "Full Time",
            location: {
                address: "456 Castro Street, San Francisco",
                details: "CA 94114, United States"
            },
            amount: "$2,340.80",
            status: "Active"
        },
        {
            id: 17,
            name: {
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
                fullName: "Chris Evans",
                email: "chris.e@mail.com"
            },
            role: "Network Engineer",
            availability: "Contract",
            location: {
                address: "789 Rainey Street, Austin",
                details: "TX 78701, United States"
            },
            amount: "$2,180.90",
            status: "Active"
        },
        {
            id: 18,
            name: {
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
                fullName: "Amanda White",
                email: "amanda.w@mail.com"
            },
            role: "Business Analyst",
            availability: "Part Time",
            location: {
                address: "123 Pearl Street, Portland",
                details: "ME 04101, United States"
            },
            amount: "$1,920.45",
            status: "Inactive"
        },
        {
            id: 19,
            name: {
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
                fullName: "Ryan Cooper",
                email: "ryan.c@mail.com"
            },
            role: "Solutions Architect",
            availability: "Full Time",
            location: {
                address: "567 Canal Street, New York",
                details: "NY 10013, United States"
            },
            amount: "$3,450.60",
            status: "Active"
        },
        {
            id: 20,
            name: {
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
                fullName: "Jessica Taylor",
                email: "jessica.t@mail.com"
            },
            role: "ML Engineer",
            availability: "Remote",
            location: {
                address: "890 Washington Street, Boston",
                details: "MA 02108, United States"
            },
            amount: "$3,180.25",
            status: "Active"
        }
    ];

    // Check which page we're on
    const isIndexPage = window.location.pathname.includes('index.html');
    
    // Initialize DataTable with conditional options
    $('#employeeTable').DataTable({
        data: isIndexPage ? employees.slice(0, 5) : employees,
        columns: [
            {
                data: null,
                orderable: false,
                className: 'h-full px-4 py-2 text-left text-sm font-normal border-r border-neutral-200 dark:border-neutral-600',
                render: function() {
                    return `
                        <div class="h-full flex justify-center items-center">
                            <label class="flex items-center cursor-pointer relative">
                                <input type="checkbox" class="row-checkbox peer h-4 w-4 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 dark:border-neutral-500 checked:bg-slate-800 dark:checked:bg-neutral-200 checked:border-slate-800 dark:checked:border-neutral-200">
                                <span class="absolute text-white dark:text-neutral-900 opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </label>
                        </div>`;
                }
            },
            {
                data: 'name',
                className: 'h-full px-4 py-2 text-left text-sm font-normal border-r border-neutral-200 dark:border-neutral-600',
                render: function(data) {
                    return `
                        <div class="flex items-center">
                            <img class="w-10 h-10 rounded-full object-cover" src="${data.image}" alt="Profile image">
                            <div class="ps-3">
                                <div class="text-md font-medium">${data.fullName}</div>
                                <div class="text-sm font-normal text-neutral-500 dark:text-neutral-400">${data.email}</div>
                            </div>
                        </div>`;
                }
            },
            { 
                data: 'role',
                className: 'h-full px-4 py-2 text-left text-sm font-normal border-r border-neutral-200 dark:border-neutral-600',
                render: function(data) {
                    return `<div class="h-full flex items-center">${data}</div>`;
                }
            },
            { 
                data: 'availability',
                className: 'h-full px-4 py-2 text-left border-r text-sm font-normal border-neutral-200 dark:border-neutral-600',
                render: function(data) {
                    return `<div class="h-full flex items-center">${data}</div>`;
                }
            },
            {
                data: 'location',
                className: 'h-full px-4 py-2 text-left text-sm font-normal border-r border-neutral-200 dark:border-neutral-600',
                render: function(data) {
                    return `
                        <div class="flex flex-col">
                            <span class="text-md font-normal">${data.address}</span>
                            <span class="text-xs font-normal text-neutral-500 dark:text-neutral-400">${data.details}</span>
                        </div>`;
                }
            },
            { 
                data: 'amount',
                className: 'h-full px-4 py-2 text-left border-r text-sm font-normal border-neutral-200 dark:border-neutral-600'
            },
            {
                data: 'status',
                className: 'h-full px-4 py-2 text-left border-r text-sm font-normal border-neutral-200 dark:border-neutral-600',
                render: function(data) {
                    const isActive = data === 'Active';
                    const colorClass = isActive ? 'green' : 'red';
                    return `
                        <span class="inline-flex items-center rounded-md bg-${colorClass}-50 px-2 py-1 text-sm font-medium text-${colorClass}-600 dark:text-${colorClass}-400 dark:bg-opacity-10 dark:bg-${colorClass}-400">
                            <svg width="8" height="8" class="mr-1 text-${colorClass}-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4" cy="4" r="4" />
                            </svg>
                            ${data} 
                        </span>`;
                }
            },
            {
                data: null,
                orderable: false,
                className: 'h-full px-4 py-2 text-left text-sm font-normal',
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
                        </div>`;
                }
            }
        ],
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
