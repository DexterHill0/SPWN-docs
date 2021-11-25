import React, { useEffect, useState } from "react";
import { Animate } from "react-move";

import styles from "./css/DiscordWidget.module.scss";
import Button from "./primitive/Button";
import Text from "./primitive/Text";

import { open } from "../utils/Utils"

const iconURL = "https://cdn.discordapp.com/icons/791323294301290546/c8cfad7a014433fc36d211a48aff62e4.webp?size=96";
const widgetURL = "https://discord.com/api/guilds/791323294301290546/widget.json";

const InviteWidget: React.FC = () => {

	const [info, setInfo] = useState({
		title: "SPWN beta testing",
		inviteURL: "",
		online: 0,
	});
	const [avatars, setAvatars] = useState<string[]>([]);

	useEffect(() => {
		fetch(widgetURL)
			.then((resp) => resp.json()
				.then((json) => {
					setInfo({ title: json.name, online: json.presence_count, inviteURL: json.instant_invite });

					const a: string[] = [];
					for (let i = 0; i < 10; i++) {
						a.push(json.members[i].avatar_url);
					}
					setAvatars(a);
				})
			)
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.topBarContainer}>
				<div className={styles.imgContainer}>
					<img src={iconURL} alt="" width={50} height={50}></img>
				</div>
				<div className={styles.infoContainer}>
					<div className={styles.textContainer}>
						<Text weight={600}>{info.title}</Text>
						<Text weight={300}>{info.online} online</Text>
					</div>

					<div className={styles.buttonContainer}>
						<Button width="7rem" height="2rem" className={styles.inviteButton}
							onClick={() => open(info.inviteURL)}
						>
							<Text >Join Server</Text>
						</Button>
					</div>
				</div>
			</div>
			<div className={styles.avatarContainer}>
				{
					avatars.map((a, i) =>
						<Animate
							key={i}
							start={{
								opacity: 0,
							}}
							enter={{
								opacity: [1],
								timing: { duration: 1000, delay: 0 },
							}}
						>
							{({ opacity }) =>
								<img src={a} alt="" width={30} height={30} className={styles.avatar} style={{ opacity }}></img>
							}
						</Animate>
					)
				}
			</div>
		</div>
	)
}

export default InviteWidget;