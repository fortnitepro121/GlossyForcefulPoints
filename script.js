document.addEventListener('DOMContentLoaded', () => {
    const commands = [
        { "id": 1, "name": "setprefix", "description": "Change the bot's command prefix for this server.", "arguments": ["prefix"], "permissions": ["Administrator"], "category": "server" },
        { "id": 2, "name": "boosterrole", "description": "Create your own custom role as a server booster.", "arguments": ["none"], "permissions": ["none"], "category": "server" },
        { "id": 3, "name": "boosterrole name", "description": "Change the name of your booster role.", "arguments": ["new name"], "permissions": ["booster"], "category": "server" },
        { "id": 3, "name": "nuke", "description": "Delete's the channel and remakes it", "arguments": ["none"], "permissions": ["manage_channels"], "category": "server" },
        { "id": 5, "name": "analytics", "description": "List all server analytics commmands.", "arguments": ["new icon"], "permissions": ["administrator"], "category": "server" },
        { "id": 5, "name": "analytics members", "description": "List member's analytics.", "arguments": ["none"], "permissions": ["administrator"], "category": "server" },
        { "id": 5, "name": "analytics channels", "description": "List channel's analytics.", "arguments": ["none"], "permissions": ["administrator"], "category": "server" },
        { "id": 5, "name": "analytics roles", "description": "List roles's analytics.", "arguments": ["none"], "permissions": ["administrator"], "category": "server" },
        { "id": 5, "name": "analytics activity (COMING SOON)", "description": "List activty's analytics.", "arguments": ["none"], "permissions": ["administrator"], "category": "server" },
        { "id": 5, "name": "quote", "description": "Quote's a member's message", "arguments": ["none"], "permissions": ["manage_messages"], "category": "server" },
        { "id": 5, "name": "emote", "description": "Steal Emote's from other servers.", "arguments": ["emote"], "permissions": ["manage_messages"], "category": "server" },
        { "id": 5, "name": "roleall", "description": "Role everyone in a discord server.", "arguments": ["role"], "permissions": ["manage_roles"], "category": "server" },
        { "id": 5, "name": "whitelistbot", "description": "Whitelist a bot from a image", "arguments": ["bot_ID"], "permissions": ["administrator"], "category": "server" },
        { "id": 5, "name": "giveaway", "description": "List all giveaway commands.", "arguments": ["none"], "permissions": ["manage_messages"], "category": "server" },
        { "id": 5, "name": "giveaway create", "description": "Start A giveaway for your Discord server.", "arguments": ["time","prize"], "permissions": ["manage_messages"], "category": "server" },
        { "id": 5, "name": "giveaway delete", "description": "Delete A giveaway for your Discord server.", "arguments": ["messageID"], "permissions": ["manage_messages"], "category": "server" },
        { "id": 5, "name": "giveaway list", "description": "List all giveaways that are hosted", "arguments": ["none"], "permissions": ["manage_messages"], "category": "server" },
        { "id": 5, "name": "poll", "description": "Create a poll in your server.", "arguments": ["none"], "permissions": ["manage_messages"], "category": "server" },
        { "id": 5, "name": "poll create", "description": "Create a poll in your server.", "arguments": ["question"], "permissions": ["manage_messages"], "category": "server" },
        { "id": 5, "name": "poll delete", "description": "Delete a poll in your server.", "arguments": ["messageid"], "permissions": ["manage_messages"], "category": "server" },
        { "id": 5, "name": "poll list", "description": "List polls in your server.", "arguments": ["none"], "permissions": ["manage_messages"], "category": "server" },
        { "id": 4, "name": "boosterrole share list", "description": "List who you share with.", "arguments": ["none"], "permissions": ["booster"], "category": "server" },
        { "id": 4, "name": "boosterrole share", "description": "Share your role with your friends", "arguments": ["member"], "permissions": ["booster"], "category": "server" },
        { "id": 4, "name": "boosterrole share remove", "description": "Remove a Share your role with your friends", "arguments": ["member"], "permissions": ["booster"], "category": "server" },
        { "id": 4, "name": "boosterrole remove", "description": "Remove Booster role", "arguments": ["member"], "permissions": ["booster"], "category": "server" },
        { "id": 4, "name": "boosterrole color", "description": "Change the color of your booster role.", "arguments": ["new color"], "permissions": ["booster"], "category": "server" },
        { "id": 5, "name": "boosterrole icon", "description": "Change the icon of your booster role.", "arguments": ["new icon"], "permissions": ["booster"], "category": "server" },
        { "id": 6, "name": "boosterrole create", "description": "Create a booster role with a custom name and color.", "arguments": ["name", "color"], "permissions": ["booster"], "category": "server" },
        { "id": 7, "name": "welcome", "description": "Configure the server's welcome system.", "arguments": ["none"], "permissions": ["manager_server"], "category": "server" },
        { "id": 8, "name": "welcome set message", "description": "Set a custom welcome message for new members.", "arguments": ["message"], "permissions": ["manager_server"], "category": "server" },
        { "id": 9, "name": "welcome set channel", "description": "Choose the channel where welcome messages are sent.", "arguments": ["channel"], "permissions": ["manager_server"], "category": "server" },
        { "id": 10, "name": "welcome set embed", "description": "Set a custom embed for the welcome message using JSON.", "arguments": ["json_embed"], "permissions": ["manager_server"], "category": "server" },
        { "id": 11, "name": "welcome set joinrole", "description": "Assign a role to new members when they join.", "arguments": ["role"], "permissions": ["manager_server"], "category": "server" },
        { "id": 12, "name": "welcome view", "description": "View the current welcome message configuration.", "arguments": ["none"], "permissions": ["manager_server"], "category": "server" },
        { "id": 13, "name": "autoresponder", "description": "Manage automatic responses to user messages.", "arguments": ["none"], "permissions": ["manage_messages"], "category": "utility" },
        { "id": 14, "name": "autoresponder add", "description": "Add a new autoresponder with a trigger and response.", "arguments": ["trigger", "response"], "permissions": ["manage_messages"], "category": "utility" },
        { "id": 15, "name": "autoresponder delete", "description": "Delete an existing autoresponder by trigger word.", "arguments": ["trigger"], "permissions": ["manage_messages"], "category": "utility" },
        { "id": 16, "name": "autoresponder view", "description": "View all configured autoresponders.", "arguments": ["none"], "permissions": ["manage_messages"], "category": "utility" },
        { "id": 17, "name": "autoreaction", "description": "Manage automatic emoji reactions to messages.", "arguments": ["none"], "permissions": ["manage_messages"], "category": "utility" },
        { "id": 18, "name": "autoreaction add", "description": "Add an automatic reaction for a trigger word.", "arguments": ["trigger", "emoji"], "permissions": ["manage_messages"], "category": "utility" },
        { "id": 19, "name": "autoreaction delete", "description": "Remove a trigger and its associated reaction.", "arguments": ["trigger"], "permissions": ["manage_messages"], "category": "utility" },
        { "id": 20, "name": "autoreaction view", "description": "View all configured automatic reactions.", "arguments": ["none"], "permissions": ["manage_messages"], "category": "utility" },
        { "id": 21, "name": "slowmode", "description": "Enable or change slowmode duration in a channel.", "arguments": ["seconds"], "permissions": ["manage_channels"], "category": "utility" },
        { "id": 22, "name": "afk", "description": "Set your AFK status with an optional reason.", "arguments": ["reason"], "permissions": ["none"], "category": "information" },
        { "id": 23, "name": "purge", "description": "Delete a number of messages, optionally from a specific member.", "arguments": ["amount", "member (optional)"], "permissions": ["none"], "category": "utility" },
        { "id": 24, "name": "servername", "description": "Change the server's name.", "arguments": ["name"], "permissions": ["administrator"], "category": "utility" },
        { "id": 25, "name": "timeout", "description": "Temporarily mute a member for a specified time and reason.", "arguments": ["member", "time", "reason"], "permissions": ["administrator"], "category": "moderation" },
        { "id": 26, "name": "jail", "description": "Restrict a member by placing them in a jail role.", "arguments": ["member"], "permissions": ["manage_roles"], "category": "moderation" },
        { "id": 27, "name": "unjail", "description": "Remove a member from the jail role.", "arguments": ["member"], "permissions": ["manage_roles"], "category": "moderation" },
        { "id": 28, "name": "nickname", "description": "Change a member's nickname.", "arguments": ["member", "name"], "permissions": ["manage_nicknames"], "category": "utility" },
        { "id": 29, "name": "resetnick", "description": "Reset a member's nickname to their original username.", "arguments": ["member"], "permissions": ["manage_nicknames"], "category": "utility" },
        { "id": 30, "name": "swapnick", "description": "Swap nicknames between two members.", "arguments": ["member1", "member2"], "permissions": ["manage_nicknames"], "category": "utility" },
        { "id": 31, "name": "reversenick", "description": "Reverse the characters in a member’s nickname.", "arguments": ["member"], "permissions": ["manage_nicknames"], "category": "utility" },
        { "id": 32, "name": "autolog", "description": "View the current autolog configuration.", "arguments": ["none"], "permissions": ["manager_server"], "category": "server" },
        { "id": 33, "name": "autolog toggle", "description": "Enable or disable specific logging events.", "arguments": ["channel_create", "channel_delete", "role_create", "role_delete", "role_update", "member_join", "member_remove", "message_edit", "message_delete"], "permissions": ["manager_server"], "category": "server" },
        { "id": 34, "name": "autolog set channel", "description": "Set the channel for all autolog messages.", "arguments": ["channel"], "permissions": ["manager_server"], "category": "server" },
        { "id": 35, "name": "antinuke", "description": "Enable anti-nuke protection and set the log channel.", "arguments": ["toggles"], "permissions": ["administrator"], "category": "server" },
        { "id": 36, "name": "antinuke toggle antimassmention", "description": "Enable or disable anti-massmention protection in a channel. ", "arguments": ["none"], "permissions": ["administrator"], "category": "server" },
        { "id": 36, "name": "antinuke toggle antibotjoin", "description": "Enable or disable bot-join protection in a channel.", "arguments": ["none"], "permissions": ["administrator"], "category": "server" },
        { "id": 36, "name": "antinuke toggle antiinvite", "description": "Enable or disable discord server invite protection in a channel.", "arguments": ["none"], "permissions": ["administrator"], "category": "server" },
        { "id": 36, "name": "antinuke toggle antispam", "description": "Enable or disable discord spam protection in a channel.", "arguments": ["none"], "permissions": ["administrator"], "category": "server" },
        { "id": 36, "name": "antinuke toggle antiwebhookcreate", "description": "Enable or disable webhook protection in a channel.", "arguments": ["none"], "permissions": ["administrator"], "category": "server" },
        { "id": 36, "name": "antinuke toggle antiwebhookspam", "description": "Enable or disable webhook spam protection in a channel.", "arguments": ["none"], "permissions": ["administrator"], "category": "server" },
        { "id": 38, "name": "antinuke whitelist add", "description": "Add a user to protection from anti nuke", "arguments": ["member"], "permissions": ["administrator"], "category": "server" },
        { "id": 38, "name": "antinuke whitelist remove", "description": "Delete a user to protection from anti nuke", "arguments": ["member"], "permissions": ["administrator"], "category": "server" },
        { "id": 38, "name": "antinuke whitelist list", "description": "List users to protection from anti nuke", "arguments": ["channel"], "permissions": ["administrator"], "category": "server" },
        { "id": 36, "name": "antinuke toggle antilink", "description": "Enable or disable anti-link protection in a channel.", "arguments": ["channel"], "permissions": ["administrator"], "category": "server" },
        { "id": 37, "name": "antinuke toggle antiemoji", "description": "Enable or disable anti-emoji spam detection.", "arguments": ["channel"], "permissions": ["administrator"], "category": "server" },
        { "id": 38, "name": "antinuke whitelist", "description": "White list commands for antinuke.", "arguments": ["channel"], "permissions": ["administrator"], "category": "server" },
        { "id": 39, "name": "snipe", "description": "Retrieve the last deleted message or image.", "arguments": ["index"], "permissions": ["none"], "category": "utility" },
        { "id": 40, "name": "clearsnipe", "description": "Clear all sniped messages or images.", "arguments": ["none"], "permissions": ["none"], "category": "utility" },
        { "id": 41, "name": "crypto", "description": "Check the current price of a cryptocurrency.", "arguments": ["crypto"], "permissions": ["manage_messages"], "category": "information" },
        { "id": 42, "name": "lock", "description": "Lock a channel to prevent members from sending messages.", "arguments": ["none"], "permissions": ["manage_channels"], "category": "moderation" },
        { "id": 43, "name": "unlock", "description": "Unlock a channel to allow messages again.", "arguments": ["none"], "permissions": ["manage_channels"], "category": "moderation" },
        { "id": 44, "name": "createrole", "description": "Create a new role in the server.", "arguments": ["role_name"], "permissions": ["manage_roles"], "category": "utility" },
        { "id": 45, "name": "deleterole", "description": "Delete a role from the server.", "arguments": ["role_name"], "permissions": ["manage_roles"], "category": "utility" },
        { "id": 46, "name": "roleinfo", "description": "Get detailed information about a specific role.", "arguments": ["role_name"], "permissions": ["manage_roles"], "category": "utility" },
        { "id": 47, "name": "role", "description": "Assign a role to a member.", "arguments": ["member", "role_name"], "permissions": ["manage_roles"], "category": "utility" },
        { "id": 48, "name": "kick", "description": "Remove a member from the server.", "arguments": ["user", "reason (optional)"], "permissions": ["Kick_Members"], "category": "moderation" },
        { "id": 49, "name": "ban", "description": "Permanently ban a user from the server.", "arguments": ["user", "reason (optional)"], "permissions": ["Ban_Members"], "category": "moderation" },
        { "id": 50, "name": "unban", "description": "Unban a previously banned user.", "arguments": ["user", "reason (optional)"], "permissions": ["Ban_Members"], "category": "moderation" },
        { "id": 51, "name": "userinfo", "description": "Show detailed information about a user.", "arguments": ["user (optional)"], "permissions": ["none"], "category": "information" },
        { "id": 52, "name": "remind", "description": "Set a reminder for yourself.", "arguments": ["time", "reason"], "permissions": ["none"], "category": "information" },
        { "id": 53, "name": "remind set", "description": "Create a new reminder with time and reason.", "arguments": ["time", "reason"], "permissions": ["none"], "category": "information" },
        { "id": 54, "name": "remind list", "description": "View all your active reminders.", "arguments": ["none"], "permissions": ["none"], "category": "information" },
        { "id": 25, "name": "untimeout", "description": "Unmute a member for a specified time and reason.", "arguments": ["member", "time", "reason"], "permissions": ["administrator"], "category": "moderation" },
        { "id": 55, "name": "remind delete", "description": "Delete a specific reminder using its ID.", "arguments": ["id"], "permissions": ["none"], "category": "information" },
        { "id": 56, "name": "instagram", "description": "Get public profile information from Instagram.", "arguments": ["name"], "permissions": ["none"], "category": "information" },
        { "id": 57, "name": "tiktok", "description": "Get public profile information from TikTok.", "arguments": ["name"], "permissions": ["none"], "category": "information" },
        { "id": 58, "name": "roblox", "description": "Get public profile information from Roblox.", "arguments": ["name"], "permissions": ["none"], "category": "information" },
        { "id": 59, "name": "twitter", "description": "Get public profile information from Twitter.", "arguments": ["name"], "permissions": ["none"], "category": "information" },
        { "id": 60, "name": "membercount", "description": "Display the total number of server members.", "arguments": ["none"], "permissions": ["none"], "category": "information" },
        { "id": 61, "name": "boostcount", "description": "Show how many boosts the server has.", "arguments": ["none"], "permissions": ["none"], "category": "information" },
        { "id": 62, "name": "prefix self", "description": "A special command to change your personal prefix.", "arguments": ["prefix"], "permissions": ["none"], "category": "utility" }
    ];

    const commandGrid = document.getElementById('command-grid');
    const categoryPills = document.querySelectorAll('.category-pill');
    const searchInput = document.getElementById('command-search');
    const commandsLink = document.getElementById('commands-link');
    const embedBuilderLink = document.getElementById('embed-builder-link'); // Added this
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

        filteredCommands.sort((a, b) => a.name.localeCompare(b.name));

        filteredCommands.forEach(command => {
            const commandCard = document.createElement('div');
            commandCard.classList.add('command-card');

            if (command.name === 'prefix self') {
                commandCard.classList.add('special-command');
            }

            const commandNameDisplay = command.name === 'prefix self' 
                ? `<i class="fas fa-star"></i> ${command.name}` 
                : command.name;

            commandCard.innerHTML = `
                <div class="command-card-header">
                    <h3>${commandNameDisplay}</h3>
                    <i class="far fa-copy copy-icon" data-command-name="${command.name}"></i>
                </div>
                <p>${command.description}</p>
                <div class="command-details">
                    <div class="command-detail-item">
                        <strong>Arguments</strong>
                        <div>${command.arguments.map(arg => `<span>${arg}</span>`).join('')}</div>
                    </div>
                    <div class="command-detail-item">
                        <strong>Permissions</strong>
                        <div>${command.permissions.map(perm => `<span>${perm}</span>`).join('')}</div>
                    </div>
                </div>
            `;
            commandGrid.appendChild(commandCard);
        });

        document.querySelectorAll('.copy-icon').forEach(icon => {
            icon.addEventListener('click', (event) => {
                const commandToCopy = event.target.dataset.commandName;
                navigator.clipboard.writeText(commandToCopy).then(() => {
                    event.target.classList.remove('far');
                    event.target.classList.add('fas');
                    event.target.style.color = '#28a745';
                    event.target.style.transform = 'scale(1.2)';
                    setTimeout(() => {
                        event.target.classList.remove('fas');
                        event.target.classList.add('far');
                        event.target.style.color = '#b0b0b0';
                        event.target.style.transform = 'scale(1)';
                    }, 1500);
                }).catch(err => {
                    console.error('Failed to copy text: ', err);
                });
            });
        });
    }

    function updateCategoryCounts() {
        const uniqueCategories = [...new Set(commands.map(cmd => cmd.category))];
        const categories = {
            all: commands.length,
        };

        uniqueCategories.forEach(category => {
            categories[category] = commands.filter(cmd => cmd.category === category).length;
        });

        for (const category in categories) {
            const countElement = document.getElementById(`${category}-count`);
            if (countElement) {
                countElement.textContent = categories[category];
            }
        }
    }

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

    // Update nav link active state
    function updateNavLinkActiveState() {
        const path = window.location.pathname;
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.classList.remove('active');
        });
        if (path.includes('embed.html')) {
            embedBuilderLink.classList.add('active');
        } else {
            commandsLink.classList.add('active');
        }
    }

    updateNavLinkActiveState();

    // Add click event for navigation links
    commandsLink.addEventListener('click', updateNavLinkActiveState);
    embedBuilderLink.addEventListener('click', updateNavLinkActiveState);
});
