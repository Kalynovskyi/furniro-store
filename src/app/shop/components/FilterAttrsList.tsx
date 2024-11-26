import React from "react";

import { filterAdding, filterRemove } from "@/redux/features/shop-filter/filterSlice";
import { useAppDispatch } from "@/redux/hooks";

interface AttrsListProps {
    attrs: string[];
    attrName: string;
    filter: ShopFilterState;
}

export function FilterAttrsList(props: AttrsListProps) {
    const dispatcher = useAppDispatch();
    const attrName = props.attrName;
    const filter = props.filter;
    const productAttr = filter[attrName as keyof ShopFilterState];

	const handleAttrChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const newState = Object.fromEntries([[ attrName, [event.currentTarget.value]]])
		if (event.target.checked) {
			dispatcher(filterAdding(newState));
		} else {
			dispatcher(filterRemove(newState));
		}
	};

	return (
		<ul className="max-h-52 overflow-auto">
			{props.attrs.map((attr: string, index: number) => (
				<li key={index}>
					<input
                        className="mr-2"
						onChange={handleAttrChange}
						type="checkbox"
						checked={Array.isArray(productAttr) && productAttr?.includes(attr)}
						value={attr}
						id={`${attr}-checkbox`}
					></input>
					<label htmlFor={`${attr}-checkbox`}>{attr}</label>
				</li>
			))}
		</ul>
	);
}
