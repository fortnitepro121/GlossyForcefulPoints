document.addEventListener('DOMContentLoaded', () => {
    const commands = [
        { id: '2', name: 'setprefix', description: 'Set command prefix for server', arguments: ['prefix'], permissions: ['Administrator'], category: 'server' },
        { id: '5', name: 'boosterrole', description: 'Create your own booster role', arguments: ['none'], permissions: ['none'], category: 'server' },
        { id: '6', name: 'boosterrole name', description: 'Edit your booster roles name', arguments: ['new name'], permissions: ['booster'], category: 'server' },
        { id: '6', name: 'boosterrole color', description: 'Edit your booster roles color', arguments: ['new color'], permissions: ['booster'], category: 'server' },
        { id: '6', name: 'boosterrole icon', description: 'Edit your booster roles icon', arguments: ['new icon'], permissions: ['booster'], category: 'server' },
        { id: '6', name: 'boosterrole create', description: 'Edit your booster roles create', arguments: ['name', 'color'], permissions: ['booster'], category: 'server' },
        { id: '6', name: 'welcome', description: 'Setup welcome message for your server', arguments: ['none'], permissions: ['manager_server'], category: 'server' },
        { id: '6', name: 'welcome set message', description: 'set a welcome message for server', arguments: ['message'], permissions: ['manager_server'], category: 'server' },
        { id: '6', name: 'welcome set channel', description: 'set a welcome channel for server', arguments: ['channel'], permissions: ['manager_server'], category: 'server' },
        { id: '6', name: 'welcome set embed', description: 'set a welcome embed for server', arguments: ['json_embed'], permissions: ['manager_server'], category: 'server' },
        { id: '6', name: 'welcome set joinrole', description: 'set a joinrole for server', arguments: ['role'], permissions: ['manager_server'], category: 'server' },
        { id: '6', name: 'welcome view', description: 'view welcome config', arguments: ['none'], permissions: ['manager_server'], category: 'server' },
        { id: '6', name: 'autoresponder', description: 'autoresponder to members messages', arguments: ['none'], permissions: ['manage_messages'], category: 'utility' },
        { id: '6', name: 'autoresponder add', description: 'add autoresponders', arguments: ['trigger', 'response'], permissions: ['manage_messages'], category: 'utility' },
        { id: '6', name: 'autoresponder delete', description: 'delete autoresponders', arguments: ['trigger'], permissions: ['manage_messages'], category: 'utility' },
        { id: '6', name: 'autoresponder view', description: 'view autoresponders', arguments: ['none'], permissions: ['manage_messages'], category: 'utility' },
        { id: '6', name: 'autoreaction', description: 'autoreaction to members messages', arguments: ['none'], permissions: ['manage_messages'], category: 'utility' },
        { id: '6', name: 'autoreaction add', description: 'add autoreaction ', arguments: ['trigger', 'emoji'], permissions: ['manage_messages'], category: 'utility' },
        { id: '6', name: 'autoreaction delete', description: 'delete autoreaction ', arguments: ['trigger'], permissions: ['manage_messages'], category: 'utility' },
        { id: '6', name: 'autoreaction view', description: 'view autoreaction ', arguments: ['none'], permissions: ['manage_messages'], category: 'utility' },
        { id: '6', name: 'slowmode', description: 'add slowmode to a channel', arguments: ['seconds'], permissions: ['manage_channels'], category: 'utility' },
        { id: '6', name: 'afk', description: 'set ur status to afk', arguments: ['reason'], permissions: ['none'], category: 'information' },
        { id: '6', name: 'purge', description: 'purge messages OR members messages', arguments: ['amount', 'member (optional)'], permissions: ['none'], category: 'utility' },
        { id: '6', name: 'servername', description: 'change servername', arguments: ['name'], permissions: ['administrator'], category: 'utility' },
        { id: '6', name: 'timeout', description: 'timeout a member', arguments: ['member', 'time', 'reason'], permissions: ['administrator'], category: 'moderation' },
        { id: '6', name: 'jail', description: 'jail a member', arguments: ['member'], permissions: ['manage_roles'], category: 'moderation' },
        { id: '6', name: 'unjail', description: 'unjail a member', arguments: ['member'], permissions: ['manage_roles'], category: 'moderation' },
        { id: '6', name: 'nickname', description: 'change member nickname', arguments: ['member', 'name'], permissions: ['manage_nicknames'], category: 'utility' },
        { id: '6', name: 'resetnick', description: 'reset member nickname', arguments: ['member'], permissions: ['manage_nicknames'], category: 'utility' },
        { id: '6', name: 'swapnick', description: 'swap members nicknames', arguments: ['member1', 'member2'], permissions: ['manage_nicknames'], category: 'utility' },
        { id: '6', name: 'reversenick', description: 'reverse member nickname', arguments: ['member'], permissions: ['manage_nicknames'], category: 'utility' },
        { id: '6', name: 'autolog', description: 'view server config for autolog', arguments: ['none'], permissions: ['manager_server'], category: 'server' },
        { id: '6', name: 'autolog toggle', description: 'toggle options for autolog.', arguments: ['channel_create', "channel_delete", 'role_create', 'role_delete', 'role_update', 'member_join', 'member_remove', 'message_edit', 'message_delete'], permissions: ['manager_server'], category: 'server' },
        { id: '6', name: 'autolog set channel', description: 'set a channel for logging', arguments: ['channel'], permissions: ['manager_server'], category: 'server' },
        { id: '6', name: 'antinuke', description: 'setup anti nuke for server', arguments: ['channel'], permissions: ['administrator'], category: 'server' },
        { id: '6', name: 'toggle_antilink', description: 'toggle antilink', arguments: ['channel'], permissions: ['administrator'], category: 'server' },
        { id: '6', name: 'toggle_antiemoji', description: 'toggle antiemoji spam', arguments: ['channel'], permissions: ['administrator'], category: 'server' },
        { id: '6', name: 'toggle_antispam', description: 'toggle antispam', arguments: ['channel'], permissions: ['administrator'], category: 'server' },
        { id: '6', name: 'snipe', description: 'snipe a deleted message/image', arguments: ['index'], permissions: ['none'], category: 'utility' },
        { id: '6', name: 'clearsnipe', description: 'clear all deleted message/image', arguments: ['none'], permissions: ['none'], category: 'utility' },
        { id: '6', name: 'crypto ', description: 'view price of crypto', arguments: ['crypto'], permissions: ['manage_messages'], category: 'information' },
        { id: '8', name: 'lock', description: 'lock a channel', arguments: ['none'], permissions: ['manage_channels'], category: 'moderation' },
        { id: '8', name: 'unlock', description: 'unlock a channel', arguments: ['none'], permissions: ['manage_channels'], category: 'moderation' },
        { id: '6', name: 'createrole', description: 'creates a role in your server', arguments: ['role_name'], permissions: ['manage_roles'], category: 'utility' },
        { id: '6', name: 'deleterole', description: 'deletes a role in your server', arguments: ['role_name'], permissions: ['manage_roles'], category: 'utility' },
        { id: '6', name: 'roleinfo', description: 'gives info on a role', arguments: ['role_name'], permissions: ['manage_roles'], category: 'utility' },
        { id: '6', name: 'role', description: 'give a member a role', arguments: ['member', 'role_name'], permissions: ['manage_roles'], category: 'utility' },
        { id: '7', name: 'kick', description: 'Kicks a user from the server.', arguments: ['user', 'reason (optional)'], permissions: ['Kick_Members'], category: 'moderation' },
        { id: '8', name: 'ban', description: 'Bans a user from the server.', arguments: ['user', 'reason (optional)'], permissions: ['Ban_Members'], category: 'moderation' },
        { id: '8', name: 'unban', description: 'Bans a user from the server.', arguments: ['user', 'reason (optional)'], permissions: ['Ban_Members'], category: 'moderation' },
        { id: '9', name: 'userinfo', description: 'Displays information about a user.', arguments: ['user (optional)'], permissions: ['none'], category: 'information' },
        { id: '9', name: 'remind', description: 'set a reminder for somthing', arguments: ['time','reason'], permissions: ['none'], category: 'information' },
        { id: '9', name: 'remind set', description: 'set a reminder for somthing', arguments: ['time','reason'], permissions: ['none'], category: 'information' },
        { id: '9', name: 'remind list', description: 'list all reminders', arguments: ['none'], permissions: ['none'], category: 'information' },
        { id: '9', name: 'remind delete', description: 'delete a reminder for somthing', arguments: ['id'], permissions: ['none'], category: 'information' },
        { id: '10', name: 'instagram', description: 'Displays information about the instagram profile', arguments: ['name'], permissions: ['none'], category: 'information' },
        { id: '10', name: 'tiktok', description: 'Displays information about the tiktok profile', arguments: ['name'], permissions: ['none'], category: 'information' },
        { id: '10', name: 'roblox', description: 'Displays information about the roblox profile', arguments: ['name'], permissions: ['none'], category: 'information' },
        { id: '10', name: 'twitter', description: 'Displays information about the twitter profile', arguments: ['name'], permissions: ['none'], category: 'information' },
        { id: '10', name: 'membercount', description: 'Displays membercount', arguments: ['none'], permissions: ['none'], category: 'information' },
        { id: '10', name: 'boostcount', description: 'Displays boostcount', arguments: ['none'], permissions: ['none'], category: 'information' },




    ];

    const commandGrid = document.getElementById('command-grid');
    const categoryPills = document.querySelectorAll('.category-pill');
    const searchInput = document.getElementById('command-search');
    const commandsLink = document.getElementById('commands-link');
    const inviteLink = document.getElementById('invite-link');

    let activeCategory = 'all';

    function renderCommands(filterCategory = 'all', searchTerm = '') {
        commandGrid.innerHTML = '';
        let filteredCommands = commands;

        if (filterCategory !== 'all') {
            filteredCommands = filteredCommands.filter(cmd => cmd.category === filterCategory);
        }

        if (searchTerm) {
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            filteredCommands = filteredCommands.filter(cmd =>
                cmd.name.toLowerCase().includes(lowerCaseSearchTerm) ||
                cmd.description.toLowerCase().includes(lowerCaseSearchTerm) ||
                cmd.arguments.some(arg => arg.toLowerCase().includes(lowerCaseSearchTerm)) ||
                cmd.permissions.some(perm => perm.toLowerCase().includes(lowerCaseSearchTerm))
            );
        }

        filteredCommands.forEach(command => {
            const commandCard = document.createElement('div');
            commandCard.classList.add('command-card');
            if (command.name === 'prefix self') {
                commandCard.classList.add('prefix-self');
            }

            const commandNameDisplay = command.name === 'prefix self' ? '<i class="fas fa-star"></i> prefix self' : command.name;

            commandCard.innerHTML = `
                <div class="command-card-header">
                    <h3>${commandNameDisplay}</h3>
                    <i class="far fa-copy copy-icon" data-command-name="${command.name}"></i>
                </div>
                <p>${command.description}</p>
                <div class="command-details">
                    <div class="command-detail-item">
                        <strong>arguments</strong>
                        <div>${command.arguments.map(arg => `<span>${arg}</span>`).join('')}</div>
                    </div>
                    <div class="command-detail-item">
                        <strong>permissions</strong>
                        <div>${command.permissions.map(perm => `<span>${perm}</span>`).join('')}</div>
                    </div>
                </div>
            `;
            commandGrid.appendChild(commandCard);
        });

        // Add event listeners for copy icons
        document.querySelectorAll('.copy-icon').forEach(icon => {
            icon.addEventListener('click', (event) => {
                const commandToCopy = event.target.dataset.commandName;
                navigator.clipboard.writeText(commandToCopy).then(() => {
                    // Optional: Provide visual feedback that text was copied
                    event.target.classList.remove('far');
                    event.target.classList.add('fas');
                    event.target.style.color = '#28a745'; // Green for success
                    setTimeout(() => {
                        event.target.classList.remove('fas');
                        event.target.classList.add('far');
                        event.target.style.color = '#b0b0b0';
                    }, 1500);
                }).catch(err => {
                    console.error('Failed to copy text: ', err);
                });
            });
        });
    }

    function updateCategoryCounts() {
        const categories = {
            all: commands.length,
            server: commands.filter(cmd => cmd.category === 'server').length,
            moderation: commands.filter(cmd => cmd.category === 'moderation').length,
            information: commands.filter(cmd => cmd.category === 'information').length,
            utility: commands.filter(cmd => cmd.category === 'utility').length,
            // Add counts for other categories as they appear in your data
        };

        for (const category in categories) {
            const countElement = document.getElementById(`${category}-count`);
            if (countElement) {
                countElement.textContent = categories[category];
            }
        }
    }

    // Initial render and count update
    renderCommands(activeCategory);
    updateCategoryCounts();

    categoryPills.forEach(pill => {
        pill.addEventListener('click', () => {
            categoryPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            activeCategory = pill.dataset.category;
            renderCommands(activeCategory, searchInput.value);
        });
    });

    searchInput.addEventListener('input', () => {
        renderCommands(activeCategory, searchInput.value);
    });

    // Handle navigation clicks for the "Invite" link
    inviteLink.addEventListener('click', (e) => {
        // We let the default link behavior (target="_blank") handle the external redirect
        // But we ensure "Commands" link remains active if it was
        document.querySelectorAll('nav ul li a').forEach(link => link.classList.remove('active'));
        commandsLink.classList.add('active');
    });

    // Handle commands link click (primarily for active state)
    commandsLink.addEventListener('click', (e) => {
        // Prevent default only if you want to prevent a full page reload to '/'
        // e.preventDefault();
        document.querySelectorAll('nav ul li a').forEach(link => link.classList.remove('active'));
        commandsLink.classList.add('active');
        // If we were navigating within the same file, renderCommands would be called here again
        // but since this is a simple page, a full reload is fine for '/'
    });

    // On page load, ensure 'Commands' link is active based on current path
    const path = window.location.pathname;
    if (path === '/' || path === '/commands' || path.includes('index.html')) {
        document.querySelectorAll('nav ul li a').forEach(link => link.classList.remove('active'));
        commandsLink.classList.add('active');
    }
});
