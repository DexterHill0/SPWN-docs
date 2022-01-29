import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Animate } from "react-move";

import Button from "./primitive/Button";
import Text from "./primitive/Text";

import { open } from "../utils/Utils";

import styles from "../styles/components/DiscordWidget.module.scss";


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
		<div className="flex flex-col items-center h-32 rounded-lg select-none sm:h-28 w-80 sm:w-60 bg-dark-300">
			<div className="flex w-full sm:h-full">
				<div className="inline-flex items-center w-16 h-16 pl-2 rounded-tl-lg bg-dark-700 sm:h-full sm:rounded-bl-lg sm:pr-2">
					<Image src={iconURL} alt="" width={50} height={50}></Image>
				</div>
				<div className="inline-flex items-center w-full h-16 rounded-tr-lg bg-dark-700 sm:h-full sm:bg-transparent sm:flex-col sm:items-start">
					<div className="flex-auto ml-2 sm:mt-2">
						<Text className="lg:text-sm md:text-sm">{info.title}</Text>
						<Text className="font-light lg:text-sm md:text-sm">{info.online} online</Text>
					</div>

					<div className="inline-grid items-center justify-end flex-auto mr-2 sm:ml-2 sm:mb-2 sm:justify-start">
						<Button className="h-8 rounded-md w-28 justify-self-end bg-[#5865F2] hover:opacity-80 active:opacity-100"
							onClick={() => open(info.inviteURL)}
						>
							<Text className="p-1 lg:text-sm md:text-sm sm:text-sm">Join Server</Text>
						</Button>
					</div>
				</div>
			</div>
			<div className="inline-flex w-full px-2 justify-evenly sm:hidden">
				{
					avatars.map((a, i) =>
						<Animate
							key={i}
							start={{
								opacity: 0,
							}}
							enter={{
								opacity: [1],
								timing: { duration: 2000, delay: 0 },
							}}
						>
							{({ opacity }) =>
								<div style={{ opacity }}>
									<img src={a} alt="" width={30} height={30} className="rounded-full" loading="lazy"></img>
								</div>
							}
						</Animate>
					)
				}
			</div>
		</div>
	)
}

export default InviteWidget;