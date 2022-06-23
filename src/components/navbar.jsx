import { useState, useEffect } from "react";
import { Button, PageHeader, Dropdown, Menu } from 'antd';
import 'antd/dist/antd.min.css'
import "./navbar.css";

export default function Navbar(props) {
    const [dropdownItems, setDropdownItems] = useState([]);

    useEffect(() => {
        var lDropdownItems = [];
        var dropdownItem;
        if (props.teams) {
            props.teams.forEach((team, i) => {
                dropdownItem = {
                    key: i,
                    label: (<a rel="noopener noreferrer" href={`/teams/${team}`}>{team.replaceAll("_", " ")}</a>),
                }
                lDropdownItems.push(dropdownItem)
            })
        }
        lDropdownItems = <Menu items={lDropdownItems} />
        setDropdownItems(lDropdownItems);

    }, [props.teams])

    const DropdownMenu = () => {
        return (
            <Dropdown key="more" overlay={dropdownItems} placement="bottomRight">
                <Button type="primary">Teams</Button>
            </Dropdown>
        )
    }

    return (
        <div className="site-page-header-ghost-wrapper">
            <PageHeader
                ghost={false}
                onBack={() => window.history.back()}
                title="RDH 2022"
                subTitle="Paly Robotics"
                extra={[
                    <DropdownMenu key="more" />,
                    <Button key="2">Matches</Button>,
                    <Button key="1" type="primary">
                        Rankings
                    </Button>,
                ]}
            >
            </PageHeader>
        </div>
    )
}