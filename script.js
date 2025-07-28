document.addEventListener('DOMContentLoaded', () => {
    const commands = [
      { "name": "setprefix", "description": "Change the bot's command prefix for this server.", "arguments": ["prefix"], "permissions": ["Administrator"], "category": "server" },
      { "name": "boosterrole", "description": "Create your own custom role as a server booster.", "arguments": ["none"], "permissions": ["none"], "category": "server" },
      { "name": "boosterrole name", "description": "Change the name of your booster role.", "arguments": ["new name"], "permissions": ["booster"], "category": "server" },
      { "name": "boosterrole color", "description": "Change the color of your booster role.", "arguments": ["new color"], "permissions": ["booster"], "category": "server" },
      { "name": "boosterrole icon", "description": "Change the icon of your booster role.", "arguments": ["new icon"], "permissions": ["booster"], "category": "server" },
      { "name": "boosterrole create", "description": "Create a booster role with a custom name and color.", "arguments": ["name", "color"], "permissions": ["booster"], "category": "server" },
      { "name": "welcome", "description": "Configure the server's welcome system.", "arguments": ["none"], "permissions": ["manager_server"], "category": "server" },
      { "name": "welcome set message", "description": "Set a custom welcome message for new members.", "arguments": ["message"], "permissions": ["manager_server"], "category": "server" },
      { "name": "welcome set channel", "description": "Choose the channel where welcome messages are sent.", "arguments": ["channel"], "permissions": ["manager_server"], "category": "server" },
      { "name": "welcome set embed", "description": "Set a custom embed for the welcome message using JSON.", "arguments": ["json_embed"], "permissions": ["manager_server"], "category": "server" },
      { "name": "welcome set joinrole", "description": "Assign a role to new members when they join.", "arguments": ["role"], "permissions": ["manager_server"], "category": "server" },
      { "name": "welcome view", "description": "View the current welcome message configuration.", "arguments": ["none"], "permissions": ["manager_server"], "category": "server" },
      { "name": "autoresponder", "description": "Manage automatic responses to user messages.", "arguments": ["none"], "permissions": ["manage_messages"], "category": "utility" },
      { "name": "autoresponder add", "description": "Add a new autoresponder with a trigger and response.", "arguments": ["trigger", "response"], "permissions": ["manage_messages"], "category": "utility" },
      { "name": "autoresponder delete", "description": "Delete an existing autoresponder by trigger word.", "arguments": ["trigger"], "permissions": ["manage_messages"], "category": "utility" },
      { "name": "autoresponder view", "description": "View all configured autoresponders.", "arguments": ["none"], "permissions": ["manage_messages"], "category": "utility" },
      { "name": "autoreaction", "description": "Manage automatic emoji reactions to messages.", "arguments": ["none"], "permissions": ["manage_messages"], "category": "utility" },
      { "name": "autoreaction add", "description": "Add an automatic reaction for a trigger word.", "arguments": ["trigger", "emoji"], "permissions": ["manage_messages"], "category": "utility" },
      { "name": "autoreaction delete", "description": "Remove a trigger and its associated reaction.", "arguments": ["trigger"], "permissions": ["manage_messages"], "category": "utility" },
      { "name": "autoreaction view", "description": "View all configured automatic reactions.", "arguments": ["none"], "permissions": ["manage_messages"], "category": "utility" },
      { "name": "slowmode", "description": "Enable or change slowmode duration in a channel.", "arguments": ["seconds"], "permissions": ["manage_channels"], "category": "utility" },
      { "name": "afk", "description": "Set your AFK status with an optional reason.", "arguments": ["reason"], "permissions": ["none"], "category": "information" },
      { "name": "purge", "description": "Delete a number of messages, optionally from a specific member.", "arguments": ["amount", "member (optional)"], "permissions": ["none"], "category": "utility" },
      { "name": "servername", "description": "Change the server's name.", "arguments": ["name"], "permissions": ["administrator"], "category": "utility" },
      { "name": "timeout", "description": "Temporarily mute a member for a specified time and reason.", "arguments": ["member", "time", "reason"], "permissions": ["administrator"], "category": "moderation" },
      { "name": "jail", "description": "Restrict a member by placing them in a jail role.", "arguments": ["member"], "permissions": ["manage_roles"], "category": "moderation" },
      { "name": "unjail", "description": "Remove a member from the jail role.", "arguments": ["member"], "permissions": ["manage_roles"], "category": "moderation" },
      { "name": "nickname", "description": "Change a member's nickname.", "arguments": ["member", "name"], "permissions": ["manage_nicknames"], "category": "utility" },
      { "name": "resetnick", "description": "Reset a member's nickname to their original username.", "arguments": ["member"], "permissions": ["manage_nicknames"], "category": "utility" },
      { "name": "swapnick", "description": "Swap nicknames between two members.", "arguments": ["member1", "member2"], "permissions": ["manage_nicknames"], "category": "utility" },
      { "name": "reversenick", "description": "Reverse the characters in a member’s nickname.", "arguments": ["member"], "permissions": ["manage_nicknames"], "category": "utility" },
      { "name": "autolog", "description": "View the current autolog configuration.", "arguments": ["none"], "permissions": ["manager_server"], "category": "server" },
      { "name": "autolog toggle", "description": "Enable or disable specific logging events.", "arguments": ["channel_create", "channel_delete", "role_create", "role_delete", "role_update", "member_join", "member_remove", "message_edit", "message_delete"], "permissions": ["manager_server"], "category": "server" },
      { "name": "autolog set channel", "description": "Set the channel for all autolog messages.", "arguments": ["channel"], "permissions": ["manager_server"], "category": "server" },
      { "name": "antinuke", "description": "Enable anti-nuke protection and set the log channel.", "arguments": ["channel"], "permissions": ["administrator"], "category": "server" },
      { "name": "toggle_antilink", "description": "Enable or disable anti-link protection in a channel.", "arguments": ["channel"], "permissions": ["administrator"], "category": "server" },
      { "name": "toggle_antiemoji", "description": "Enable or disable anti-emoji spam detection.", "arguments": ["channel"], "permissions": ["administrator"], "category": "server" },
      { "name": "toggle_antispam", "description": "Enable or disable anti-spam protection.", "arguments": ["channel"], "permissions": ["administrator"], "category": "server" },
      { "name": "snipe", "description": "Retrieve the last deleted message or image.", "arguments": ["index"], "permissions": ["none"], "category": "utility" },
      { "name": "clearsnipe", "description": "Clear all sniped messages or images.", "arguments": ["none"], "permissions": ["none"], "category": "utility" },
      { "name": "crypto", "description": "Check the current price of a cryptocurrency.", "arguments": ["crypto"], "permissions": ["manage_messages"], "category": "information" },
      { "name": "lock", "description": "Lock a channel to prevent members from sending messages.", "arguments": ["none"], "permissions": ["manage_channels"], "category": "moderation" },
      { "name": "unlock", "description": "Unlock a channel to allow messages again.", "arguments": ["none"], "permissions": ["manage_channels"], "category": "moderation" },
      { "name": "createrole", "description": "Create a new role in the server.", "arguments": ["role_name"], "permissions": ["manage_roles"], "category": "utility" },
      { "name": "deleterole", "description": "Delete a role from the server.", "arguments": ["role_name"], "permissions": ["manage_roles"], "category": "utility" },
      { "name": "roleinfo", "description": "Get detailed information about a specific role.", "arguments": ["role_name"], "permissions": ["manage_roles"], "category": "utility" },
      { "name": "role", "description": "Assign a role to a member.", "arguments": ["member", "role_name"], "permissions": ["manage_roles"], "category": "utility" },
      { "name": "kick", "description": "Remove a member from the server.", "arguments": ["user", "reason (optional)"], "permissions": ["Kick_Members"], "category": "moderation" },
      { "name": "ban", "description": "Permanently ban a user from the server.", "arguments": ["user", "reason (optional)"], "permissions": ["Ban_Members"], "category": "moderation" },
      { "name": "unban", "description": "Unban a previously banned user.", "arguments": ["user", "reason (optional)"], "permissions": ["Ban_Members"], "category": "moderation" },
      { "name": "userinfo", "description": "Show detailed information about a user.", "arguments": ["user (optional)"], "permissions": ["none"], "category": "information" },
      { "name": "remind", "description": "Set a reminder for yourself.", "arguments": ["time", "reason"], "permissions": ["none"], "category": "information" },
      { "name": "remind set", "description": "Create a new reminder with time and reason.", "arguments": ["time", "reason"], "permissions": ["none"], "category": "information" },
      { "name": "remind list", "description": "View all your active reminders.", "arguments": ["none"], "permissions": ["none"], "category": "information" },
      { "name": "remind delete", "description": "Delete a specific reminder using its ID.", "arguments": ["id"], "permissions": ["none"], "category": "information" },
      { "name": "instagram", "description": "Get public profile information from Instagram.", "arguments": ["name"], "permissions": ["none"], "category": "information" },
      { "name": "tiktok", "description": "Get public profile information from TikTok.", "arguments": ["name"], "permissions": ["none"], "category": "information" },
      { "name": "roblox", "description": "Get public profile information from Roblox.", "arguments": ["name"], "permissions": ["none"], "category": "information" },
      { "name": "twitter", "description": "Get public profile information from Twitter.", "arguments": ["name"], "permissions": ["none"], "category": "information" },
      { "name": "membercount", "description": "Display the total number of server members.", "arguments": ["none"], "permissions": ["none"], "category": "information" },
      { "name": "boostcount", "description": "Show how many boosts the server has.", "arguments": ["none"], "permissions": ["none"], "category": "information" },
]


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
