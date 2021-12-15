import React, { useEffect, useState } from "react";
import Router from "next/router";
import Select from "react-select";


type Option = { value: string; label: string; };

const selectOptions: Option[] = [
	{ value: "en", label: "English (en-UK)" },
	{ value: "ru", label: "русский (ru)" },
	{ value: "it", label: "Italiano (it)" },
];
const langIds = Object.fromEntries(selectOptions.map((o, i) => [o.value, selectOptions[i]]));

const getLanguageOption = (langId?: string) => {
	const reqLang = langId || new URLSearchParams(window.location.search).get("lang");
	return langIds[reqLang || "en"];
}

const LanguageSelector: React.FC = () => {

	const [lang, setLang] = useState<Option>(selectOptions[0]);

	//https://github.com/JedWatson/react-select/issues/3590
	//this fix means when the server loads the content the id for the select is the same as the id for the select on the client
	//but once it loads on the client, we set it to something unique, so no instances have the same id
	const [id, setId] = useState("constant-id");

	useEffect(() => {
		setLang(getLanguageOption());

		setId((+new Date * (Math.random() * 1e4)).toString(36));
	}, []);

	const onChange = (e: any) => {
		setLang(getLanguageOption(e.value));
		
		Router.push(`/?lang=${e.value}`, undefined, { shallow: true });
	}

	const styles = {
		container: (provided: any) => ({
			...provided,
			zIndex: 9999,
		}),
		control: (provided: any) => ({
			...provided,
			background: "#1c1c1c",
			border: "none",
			minHeight: "0",
			height: "min(max(1.5rem, 4vw), 2.5rem)",
		}),
		option: (provided: any) => ({
			...provided,
			background: "#1c1c1c",
		}),
		menu: (provided: any) => ({
			...provided,
			background: "#1c1c1c",
		}),
		menuList: (provided: any) => ({
			...provided,
			borderRadius: "5px",
			background: "#1c1c1c",
			color: "#ffffff",
		}),
		singleValue: (provided: any) => ({
			...provided,
			color: "#ffffff",
			fontSize: "min(max(0.7rem, 2vw), 1rem)"
		}),
		indicatorsContainer: (provided: any) => ({
			...provided,
			height: "min(max(1.5rem, 4vw), 2.5rem)",
		}),
		dropdownIndicator: (provided: any) => ({
			...provided,
			paddingTop: 5,
			paddingBottom: 5,
			minHeight: 0,
		}),
	}

	return (
		<Select
			instanceId={id}
			id={id}
			value={lang}
			defaultValue={selectOptions[0]}
			options={selectOptions}
			onChange={onChange}
			isSearchable={false}
			styles={styles}
		></Select>
	)
}

export default LanguageSelector;