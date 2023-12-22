import { CheckboxesTagsOptions } from "../../../assets/components/AutocompleteTagsCheckboxesMUI/AutocompleteTagsCheckboxesMUI";
import {
    InterfaceTech,
    InterfaceTechWithApply,
    Technology,
    TechnologyName,
} from "../../../assets/interfaces/interfaces";
import { IFormInput } from "./ModalWorkManagerForm";


function processValues(group: string, values: undefined | TechnologyName[] | Technology[]): CheckboxesTagsOptions {
    if (!values) {
        return [];
    }

    return values.map(value => ({
        group,
        value: typeof value === "object" && value !== null && !Array.isArray(value)
            ? value.name
            : String(value),
    }));
}

export const getOptionsGroupAutocomplete = <T extends (InterfaceTech[] | InterfaceTechWithApply[])>(
    technologies: T
): CheckboxesTagsOptions => {
    const optionsPrep: CheckboxesTagsOptions = [];

    technologies.forEach(groupData => {
        optionsPrep.push(
            ...Object.entries(groupData).flatMap(([group, values]) => processValues(group, values))
        );
    });

    return optionsPrep;
};


export const prepareDataForRequest = (data: IFormInput) => {
    return {
        ...data,
        frontTech: prepareTech(data.frontTech),
        backTech: prepareTech(data.backTech),
    };
};

export const prepareTech = (tech: CheckboxesTagsOptions) => {
    const apply = 100;

    return tech.reduce((acc, currentTech) => {
        const groupName = currentTech.group;
        const existingGroup = acc.find(
            (groupAcc: InterfaceTechWithApply) =>
                Object.keys(groupAcc)[0] === groupName
        );

        if (existingGroup) {
            existingGroup[groupName].push({ apply, name: currentTech.value });
        } else {
            acc.push({ [groupName]: [{ apply, name: currentTech.value }] });
        }

        return acc;
    }, [] as InterfaceTechWithApply[]);
};
