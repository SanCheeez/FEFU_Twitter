import React from "react";
import Layout from "../Layout/Layout";
import { SearchbarHeader } from "../Searchbar/SearchbarHeader/SearchbarHeader";
import { ActualThemes } from "../SidebarRight/ActualThemes/ActualThemes";

export const ExplorePage = (): JSX.Element => {
    return (
        <Layout title="Актуальное" set_actual_and_searchbar={false}>
            <SearchbarHeader />
            <ActualThemes is_explore={true} />
        </Layout>
    );
}