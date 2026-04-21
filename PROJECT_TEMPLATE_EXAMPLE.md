# Project Showcase Template

This is a template for creating detailed project showcases similar to the reference portfolios.

## How to Use

1. **Add Project Images to `public` folder:**
   ```
   public/
   ├── projects/
   │   ├── project-1/
   │   │   ├── image-1.jpg
   │   │   ├── image-2.jpg
   │   │   ├── image-3.jpg
   │   ├── project-2/
   │   │   ├── image-1.jpg
   ```

2. **Create Project Data Structure** in your content.ts:
   ```typescript
   export const projectShowcases = [
     {
       id: 'risc-v-cpu',
       name: 'Single-Cycle RISC-V CPU on FPGA',
       description: 'Implemented a fully functional RV32I single-cycle CPU in SystemVerilog with separate instruction and data memories. Designed for the Basys 3 FPGA development board.',
       images: [
         '/projects/risc-v-cpu/schematic-1.jpg',
         '/projects/risc-v-cpu/schematic-2.jpg',
         '/projects/risc-v-cpu/implementation.jpg',
       ],
       tags: ['FPGA', 'SystemVerilog', 'CPU Design', 'Digital Logic'],
       date: 'December 2023',
       details: {
         role: 'Lead Designer',
         technologies: ['SystemVerilog', 'Xilinx Vivado', 'FPGA', 'Testbenches'],
         outcome: 'Successfully implemented and tested a functional CPU core capable of executing 32-bit RISC-V instructions with full instruction memory management.',
       },
     },
     {
       id: 'roulette-wheel',
       name: 'Microcontroller-Based Roulette Wheel',
       description: 'Designed custom ATmega32U4 PCB with integrated USB programming, signal protection, and power regulation for an embedded spinning wheel device.',
       images: [
         '/projects/roulette/pcb-front.jpg',
         '/projects/roulette/pcb-back.jpg',
         '/projects/roulette/schematic.jpg',
         '/projects/roulette/assembled.jpg',
       ],
       tags: ['PCB Design', 'Embedded Systems', 'Altium', 'Microcontroller'],
       date: 'November 2023',
       details: {
         role: 'PCB Designer & Firmware Developer',
         technologies: ['Altium Designer', 'ATmega32U4', 'C', 'USB Protocol'],
         outcome: 'Delivered a compact, production-ready PCB with integrated USB programming capability and custom firmware for motor control.',
       },
     },
   ];
   ```

3. **Use in your App.tsx:**
   ```typescript
   import { ProjectShowcase } from './components/ProjectShowcase';
   import { projectShowcases } from './content';

   // In your projects section:
   <Section id="projects" className="py-20 md:py-32">
     <h2 className="text-4xl md:text-5xl font-bold mb-16">Featured Projects</h2>
     <div className="space-y-12">
       {projectShowcases.map((project) => (
         <ProjectShowcase
           key={project.id}
           name={project.name}
           description={project.description}
           images={project.images}
           tags={project.tags}
           date={project.date}
           details={project.details}
         />
       ))}
     </div>
   </Section>
   ```

## Public Folder Structure for Projects

```
public/
├── headshot.jpg
├── Logan_Diep_Resume.pdf
└── projects/
    ├── risc-v-cpu/
    │   ├── schematic-1.jpg
    │   ├── schematic-2.jpg
    │   └── implementation.jpg
    ├── roulette/
    │   ├── pcb-front.jpg
    │   ├── pcb-back.jpg
    │   ├── schematic.jpg
    │   └── assembled.jpg
    ├── rov/
    │   ├── overview.jpg
    │   ├── electrical-layout.jpg
    │   └── in-action.jpg
    └── data-pipeline/
        ├── dashboard.jpg
        └── results.jpg
```

## Component Features

- **Image Gallery** with navigation arrows and counter
- **Project Details** section with role, technologies, and outcome
- **Tags/Skills** display
- **Responsive Design** that works on mobile and desktop
- **Clean Typography** matching your portfolio aesthetic

## Next Steps

1. Organize your project images into the `public/projects/` folder
2. Update your `content.ts` with detailed project data
3. Replace the simple grid layout with the new `ProjectShowcase` component
4. Each project will now display with full visual context and details
