document.addEventListener('DOMContentLoaded', function() {
    const admins = [
        {
            id: '1',
            username: 'davidwood',
            firstName: 'David',
            lastName: 'Wood',
            role: 'Super Admin',
            status: 'Active'
        },
        // Add more admin data as needed
    ];

    $('#adminTable').DataTable({
        data: admins,
        columns: [
            {
                // Checkbox column
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
                data: 'id',
                className: 'h-full px-4 py-2 text-left text-sm font-normal border-r border-neutral-200 dark:border-neutral-600'
            },
            { 
                data: 'username',
                className: 'h-full px-4 py-2 text-left text-sm font-normal border-r border-neutral-200 dark:border-neutral-600'
            },
            { 
                data: 'firstName',
                className: 'h-full px-4 py-2 text-left text-sm font-normal border-r border-neutral-200 dark:border-neutral-600'
            },
            { 
                data: 'lastName',
                className: 'h-full px-4 py-2 text-left text-sm font-normal border-r border-neutral-200 dark:border-neutral-600'
            },
            { 
                data: 'role',
                className: 'h-full px-4 py-2 text-left text-sm font-normal border-r border-neutral-200 dark:border-neutral-600'
            },
            { 
                data: 'status',
                className: 'h-full px-4 py-2 text-left text-sm font-normal border-r border-neutral-200 dark:border-neutral-600',
                render: function(data) {
                    return `
                        <span class="inline-flex items-center rounded-md gap-2 bg-green-50 px-2 py-1 text-sm font-medium text-green-600 dark:text-green-400 dark:bg-opacity-10 dark:bg-green-400">
                            <svg width="8" height="8" class="mr-1 text-green-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4" cy="4" r="4" />
                            </svg>
                            ${data}
                        </span>`;
                }
            },
            {
                // Action column
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
        dom: '<"overflow-x-auto"t><"flex items-center justify-between p-4 border-t border-neutral-200 dark:border-neutral-700"<"hidden md:flex text-sm font-normal text-neutral-500 dark:text-neutral-400"i><"flex items-center gap-2"p><"custom-length-menu-container">>',
        ordering: true,
        order: [[1, 'asc']],
        drawCallback: function() {
            // Style pagination buttons
            $('.paginate_button').each(function() {
                if ($(this).hasClass('current')) {
                    $(this).addClass('bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white')
                        .removeClass('bg-white dark:bg-neutral-800');
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
            $(row).addClass('text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-700 cursor-pointer');
            $(row).find('td').addClass('h-full align-middle');
            
            $(row).find('td').each(function() {
                const content = $(this).html();
                if (!content.includes('div class="')) {
                    $(this).html(`<div class="h-full flex items-center">${content}</div>`);
                }
            });
        },
        initComplete: function() {
            $('head').append(`
                <style>
                    .dark .sorting:before,
                    .dark .sorting:after,
                    .dark .sorting_asc:before,
                    .dark .sorting_asc:after,
                    .dark .sorting_desc:before,
                    .dark .sorting_desc:after {
                        color: #fff !important;
                    }
                </style>
            `);
        }
    });
});
