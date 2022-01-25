import React, { useEffect, useState } from "react";
import Router from "next/router";
import Select, { components } from "react-select";
import { IndicatorsContainer } from "react-select/dist/declarations/src/components/containers";

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
	const id = "constant-id";

	const onChange = (e: any) => {
		setLang(getLanguageOption(e.value));

		Router.push(`/?lang=${e.value}`);
	}

	const makeComponent = (Component: any, styles: string) => {
		return (props: any) => <Component {...props} className={styles}></Component>
	}

	useEffect(() => {
		setLang(getLanguageOption());
	}, [])

	return (
		<Select
			instanceId={id}
			id={id}
			value={lang}
			defaultValue={selectOptions[0]}
			options={selectOptions}
			onChange={onChange}
			isSearchable={false}
			components={{
				Control: makeComponent(components.Control, "!bg-dark-800 !border-none !min-h-0 z-50 sm:text-[13px]"),
				Option: makeComponent(components.Option, "bg-dark-800"),
				Menu: makeComponent(components.Menu, "!bg-dark-800 !z-50"),
				MenuList: makeComponent(components.MenuList, "!bg-dark-800 rounded-md text-txt sm:text-[13px]"),
				SingleValue: makeComponent(components.SingleValue, "!text-txt"),
				IndicatorsContainer: makeComponent(components.IndicatorsContainer, "bg-dark-800 rounded-md h-auto sm:h-[30px]"),
				DropdownIndicator: makeComponent(components.DropdownIndicator, "py-1.5 min-h-0"),
			}}
		></Select>
	)
}

export default LanguageSelector;