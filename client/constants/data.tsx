import { IService, IToolType } from "@/types/ui";
import { Biohazard, CircleCheck, Plane } from "lucide-react";
import Icon0 from "@/assets/icons/services/Vector.svg";
import Icon1 from "@/assets/icons/services/Vector-1.svg";
import Icon2 from "@/assets/icons/services/Vector-2.svg";
import Icon3 from "@/assets/icons/services/Vector-3.svg";
import Icon4 from "@/assets/icons/services/Vector-4.svg";
import Icon5 from "@/assets/icons/services/Vector-5.svg";
import Icon6 from "@/assets/icons/services/Vector-6.svg";
import Icon7 from "@/assets/icons/services/Vector-7.svg";
import Icon8 from "@/assets/icons/services/Vector-8.svg";
import Icon9 from "@/assets/icons/services/Vector-9.svg";
import Icon10 from "@/assets/icons/services/Vector-10.svg";
import Icon11 from "@/assets/icons/services/Vector-11.svg";

export const tools: IToolType[] = [
    {
        title: "ALLORATION",
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel corporis, eum laboriosam atque impedit perferendis id enim culpa fugit! Quasi.',
        color: "before:bg-green-500",
        icon: <Biohazard size={90} className='z-0 text-green-100 opacity-70' />
    },
    {
        title: "REAL TIME",
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel corporis, eum laboriosam atque impedit perferendis id enim culpa fugit! Quasi.',
        color: "before:bg-pink-500",
        icon: <Plane size={90} className='z-0 text-pink-100 opacity-70' />
    },
    {
        title: "CONFIRMAION",
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel corporis, eum laboriosam atque impedit perferendis id enim culpa fugit! Quasi.',
        color: "before:bg-orange-500",
        icon: <CircleCheck size={90} className='z-0 text-orange-100 opacity-70' />
    }
]

export const services: IService[] = [
    {
        heading: "Efficiency",
        description: "It streamlines the process of allocating vehicles to clients, saving you time and effort.",
        icon: Icon0
    },
    {
        heading: "Versatility",
        description: "It can be used for various transportation needs, including buses, shuttles, and VIP services.",
        icon: Icon1
    },
    {
        heading: "Reliability",
        description: "It can be used for various transportation needs, including buses, shuttles, and VIP services.",
        icon: Icon2
    },
    {
        heading: "Simplicity",
        description: "Simplify the reservation process with an intuitive online tool.",
        icon: Icon3
    },
    {
        heading: "Convenience",
        description: "Access and manage vehicle allocations online, making it convenient and accessible.",
        icon: Icon4
    },
    {
        heading: "Time-Saving",
        description: "Save time on administrative tasks, allowing you to focus on other aspects of your business.",
        icon: Icon5
    },
    {
        heading: "Enhanced Service",
        description: "Provide better service to your clients by ensuring that their transportation needs are met efficiently.",
        icon: Icon6
    },
    {
        heading: "Accuracy",
        description: "Reduce the risk of errors in vehicle allocation.",
        icon: Icon7
    },
    {
        heading: "Cost-Effective",
        description: "Optimize vehicle usage, potentially saving on operational costs.",
        icon: Icon8
    },
    {
        heading: "Improved Planning",
        description: "Better plan and coordinate transportation services for your clients.",
        icon: Icon9
    },
    {
        heading: "Enhanced Security",
        description: "Minimize the risk of system infections or data breaches by using a secure online platform.",
        icon: Icon10
    },
    {
        heading: "No Installation Required",
        description: "Access the service without the need to install any software, reducing setup hassles.",
        icon: Icon11
    }
];
